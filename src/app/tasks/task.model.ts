export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export interface Task {
  id: number;
  title: string;
  priority: TaskPriority;
  description: string;
  timer: number;
  done: boolean;
}
