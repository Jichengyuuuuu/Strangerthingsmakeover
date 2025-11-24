export enum AppStep {
  SCENARIO_SELECTION = 'SCENARIO_SELECTION',
  IMAGE_UPLOAD = 'IMAGE_UPLOAD',
  PROCESSING = 'PROCESSING',
  RESULT = 'RESULT',
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  promptModifier: string;
  iconName: 'mall' | 'monster' | 'bike' | 'lab';
  color: string;
}

export interface GenerationResult {
  originalImage: string;
  generatedImage: string | null;
  scenario: Scenario;
}
