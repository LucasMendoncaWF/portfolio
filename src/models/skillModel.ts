export interface Skill {
  name: string;
  level: number;
}

export interface SkillsResponse {
  frontend: Skill[];
  backend: Skill[];
  databases: Skill[];
  IA: Skill[];
  testingTools: Skill[];
  otherTools: Skill[];
}
