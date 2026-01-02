import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/keyan/": [
    "videoUnderstanding/videoUnderstanding",
    "videoRepresentation/videoRepresentation",
    "videoDialog/videoDialog",

    //"multiModal/multiModal",
    "adversarialExample/adversarial-example",
    "adversarialExample/adversarial-example-1",
    
    "semanticAdversarial/semantic-adversarial",

    "unrestrictedAdversarialExamples/unrestricted-adversarial-examples-1",
    "unrestrictedAdversarialExamples/unrestricted-adversarial-examples-2",

  ],

  "/knowledge/": [
    "contrastiveLearning/contrastiveLearning",
    "Diffusion/Diffusion",
    "causalInference/Causal_Inference",
    "reasoning/reasoning",
    "ReinforcementLearning/ReinforcementLearning",
    
  ],

  "/book/": [
    "202309" ,
    "202310" ,
    "202311" ,
    "maoxuan" ,
  ],

  "/train/": [

    "DDP/DDP" ,
    "AVSD/AVSD" ,
    "trick/trick" ,
  ],

  "/Tools/Git/": "structure",
  "/Tools/Git/*": "structure",
  "/Tools/MarkDown/": "structure",
  "/Tools/Resource/": "structure",

});
