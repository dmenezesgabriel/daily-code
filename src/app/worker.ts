import {
  env,
  type FeatureExtractionPipeline,
  pipeline,
  type PipelineType,
} from "@huggingface/transformers";

env.allowLocalModels = false;

class PipelineSingleton {
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
      });
    }
    return this.instance;
  }
}

self.addEventListener("message", async (event) => {
  const embedder = await PipelineSingleton.getInstance();

  const output = await embedder(event.data.text, {
    pooling: "mean",
    normalize: true,
  });

  self.postMessage({
    status: "complete",
    output: Array.from(output.data),
  });
});
