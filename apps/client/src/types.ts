export interface Email {
  id: string;
  from: string;
  subject: string;
  preview: string;
  date: string;
  read: boolean;
  starred: boolean;
  labelIds: string[];
}

export interface EmailLabel {
  id: string;
  name: string;
  color: string;
}
