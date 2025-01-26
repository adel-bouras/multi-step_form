import { create } from "zustand";

interface Step {
  step: number;
  setStep: (newStep: number) => void;
}

interface Name {
  name: string;
  setName: (newName: string) => void;
}

interface Email {
  email: string;
  setEmail: (newEmail: string) => void;
}

interface Phone {
  phone: string;
  setPhone: (newPhone: string) => void;
}

interface Plan {
  plan: "Arcade" | "Advanced" | "Pro";
  setPlan: (newPlan: "Arcade" | "Advanced" | "Pro") => void;
}

interface BillType {
  billType: "mo" | "yr";
  setBill: (value: "mo" | "yr") => void;
}

interface Price {
  price: number;
  setPrice: (value: number) => void;
}

interface Service {
  services: string[];
  setService: (value: string) => void;
  removeService: (value: string) => void;
}

const useStep = create<Step>((set) => ({
  step: 1,
  setStep: (value) => set({ step: value }),
}));

const useName = create<Name>((set) => ({
  name: "",
  setName: (value) => set({ name: value }),
}));

const useEmail = create<Email>((set) => ({
  email: "",
  setEmail: (value) => set({ email: value }),
}));

const usePhone = create<Phone>((set) => ({
  phone: "",
  setPhone: (value) => set({ phone: value }),
}));

const usePlan = create<Plan>((set) => ({
  plan: "Arcade",
  setPlan: (value) => set({ plan: value }),
}));

const useBill = create<BillType>((set) => ({
  billType: "mo",
  setBill: (value) => set({ billType: value }),
}));

const usePrice = create<Price>((set) => ({
  price: 9,
  setPrice: (value) =>
    set({
      price: value,
    }),
}));

const useServices = create<Service>((set) => ({
  services: [],
  setService: (value: string) =>
    set((state) => ({
      services: [...state.services, value],
    })),
  removeService: (value: string) =>
    set((state) => ({
      services: state.services.filter((v) => v !== value),
    })),
}));

export {
  useStep,
  usePrice,
  useEmail,
  useName,
  usePhone,
  usePlan,
  useBill,
  useServices,
};
export type { Name, Email, Phone, Price };
