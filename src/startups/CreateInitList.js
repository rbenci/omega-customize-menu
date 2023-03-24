/** @format */
import { v4 as uuid } from "uuid";

export const initialList = [
  { id: uuid(), name: "New Employees" },
  { id: uuid(), name: "Eligibility" },
  {
    id: uuid(),
    name: "canvas",
    type: "layout",
    list: [
      { id: uuid(), name: "Eligibility" },
      { id: uuid(), name: "Open Enrollment" },
      { id: uuid(), name: "Newly Benefit Eligible" },
      { id: uuid(), name: "Qualifying Event" },
    ],
  },
  { id: uuid(), name: "Health Plans" },
  {
    id: uuid(),
    name: "canvas",
    type: "layout",
    list: [
      { id: uuid(), name: "Medical" },
      { id: uuid(), name: "Health Savings Account (HSA)" },
      { id: uuid(), name: "Prescriptions" },
      { id: uuid(), name: "Dental" },
      { id: uuid(), name: "Vision" },
      { id: uuid(), name: "Telemedicine" },
      { id: uuid(), name: "Cost of Coverage" },
    ],
  },
  { id: uuid(), name: "Valuable Benefits" },
  {
    id: uuid(),
    name: "canvas",
    type: "layout",
    list: [
      { id: uuid(), name: "Employee Assistance Program (EAP)" },
      { id: uuid(), name: "Wellness" },
      { id: uuid(), name: "Flexible Spending Account (FSA)" },
      { id: uuid(), name: "401(K) Retirement Plan" },
      { id: uuid(), name: "Life and AD&D" },
      {
        id: uuid(),
        type: "layout",
        list: [
          { id: uuid(), name: "Basic Life Insurace" },
          { id: uuid(), name: "Voluntary Life Insurace" },
        ],
      },
      { id: uuid(), name: "Disability Insurance" },
    ],
  },
  { id: uuid(), name: "Voluntary Benefits" },
  {
    id: uuid(),
    name: "canvas",
    type: "layout",
    list: [
      { id: uuid(), name: "Accident" },
      { id: uuid(), name: "Critical Illness" },
      { id: uuid(), name: "Hospital Indemnity" },
    ],
  },
  { id: uuid(), name: "Employee Perks" },
  {
    id: uuid(),
    name: "canvas",
    type: "layout",
    list: [
      { id: uuid(), name: "Paid Time Off (PTO)" },
      { id: uuid(), name: "Company Paid Holidays" },
      { id: uuid(), name: "Tuition Reimbursement" },
    ],
  },
  { id: uuid(), name: "Contacts & Resources" },
  {
    id: uuid(),
    name: "canvas",
    type: "layout",
    list: [
      { id: uuid(), name: "Benefit Resource Center" },
      { id: uuid(), name: "Contacts & Resources" },
      { id: uuid(), name: "What's New This Year?" },
      { id: uuid(), name: "Video Library" },
      { id: uuid(), name: "Glossary of Terms" },
    ],
  },
];
