import { RSVPStatus } from '../enums/rsvp-status';

export class CreateGuestDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  rsvpStatus: RSVPStatus;
  dietaryRestriction: string;
  allergies: string;
  kidsUnder14: number;
  notes: string;
  plusOne: boolean;
  tableId?: string | null;
  plusOneName?: string;
}
