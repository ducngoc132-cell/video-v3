
export interface Character {
  name: string;
  appearance: string;
  outfit: string;
  emotions: string;
  description: string;
}

export interface Scene {
  time: string;
  actionDescription: string;
  imagePrompt: string;
  videoPrompt: string;
}

export interface VideoProject {
  topic: string;
  character: Character;
  script: string;
  scenes: Scene[];
}

export enum GenerationState {
  IDLE = 'IDLE',
  GENERATING_PLAN = 'GENERATING_PLAN',
  GENERATING_MEDIA = 'GENERATING_MEDIA',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}
