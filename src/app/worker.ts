import {
  env,
  type FeatureExtractionPipeline,
  pipeline,
  type PipelineType,
  type TextGenerationPipeline,
} from "@huggingface/transformers";

env.allowLocalModels = false;

class FeatureExtractionPipelineSingleton {
  static task = "feature-extraction";
  static model = "Xenova/multilingual-e5-small";
  static instance: Promise<FeatureExtractionPipeline> | null = null;

  static async getInstance() {
    if (this.instance === null) {
      this.instance = pipeline(this.task as PipelineType, this.model, {
        progress_callback: (x) => {
          self.postMessage(x);
        },
        dtype: "fp32",
      }) as Promise<FeatureExtractionPipeline>;
    }
    return this.instance;
  }
}

class TextGenerationPipelineSingleton {
  static task = "text-generation";
  static model = "HuggingFaceTB/SmolLM2-135M-Instruct";
  static instance: Promise<TextGenerationPipeline> | null = null;

  static async getInstance() {
    if (this.instance === null) {
      this.instance = pipeline(this.task as PipelineType, this.model, {
        progress_callback: (x) => {
          self.postMessage(x);
        },
        dtype: "fp16",
      }) as Promise<TextGenerationPipeline>;
    }
    return this.instance;
  }
}

self.addEventListener("message", async (event) => {
  if (event.data.task === "feature-extraction") {
    console.log("feature-extraction");

    const embedder = await FeatureExtractionPipelineSingleton.getInstance();

    const output = await embedder(event.data.text, {
      pooling: "mean",
      normalize: true,
    });

    console.log("data");
    console.log(JSON.stringify(output.data));

    self.postMessage({
      status: "complete",
      task: "feature-extraction",
      output: Array.from(output.data),
    });
  } else if (event.data.task === "text-generation") {
    const generator = await TextGenerationPipelineSingleton.getInstance();

    const text = event.data.text;

    console.log("Received message for text-generation:", text);

    const messages = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: text },
    ];

    const prompt = generator.tokenizer.apply_chat_template(messages, {
      tokenize: false,
      add_generation_prompt: true,
    });

    console.log("Generated prompt:", prompt);

    const output = await generator(prompt, {
      max_new_tokens: 128,
      do_sample: false,
      return_full_text: false,
    });

    console.log("Generated output:", output[0].generated_text);

    self.postMessage({
      status: "complete",
      task: "text-generation",
      output: output[0].generated_text,
    });
  }
});
