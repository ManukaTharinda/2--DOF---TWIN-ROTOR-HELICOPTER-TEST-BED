// Drop your actual files into /public/docs/ using these exact filenames
// (or update the href values below to match whatever you name them).

export type DocItem = {
  code: string; // short document code, instrument-panel style
  title: string;
  description: string;
  href: string;
  kind: "PDF" | "DOC" | "ZIP" | "CAD";
};

export const docs: DocItem[] = [
  {
    code: "DOC-01",
    title: "User Manual",
    description: "Setup, calibration, power-up sequence and safe operating limits for 2 DOF Twin Rotor Helicopter Test Bed",
    href: "/docs/User_Manual.pdf",
    kind: "PDF",
  },
  {
    code: "DOC-02",
    title: "Project Proposal",
    description: "Full write-up: objectives, modeling, controller design.",
    href: "/docs/Project Proposal.pdf",
    kind: "PDF",
  },

  {
    code: "DOC-04",
    title: "Controller Source Code",
    description: "Firmware and control-loop source, packaged as a zip archive.",
    href: "/docs/ProjectFolder.zip",
    kind: "ZIP",
  },
  {
    code: "DOC-05",
    title: "CAD & Mechanical Drawings",
    description: "Beam, gimbal and mount drawings for fabrication or reference.",
    href: "/docs/cad-drawings.zip",
    kind: "CAD",
  },
  {
    code: "DOC-06",
    title: "Testing & Results",
    description: "Recorded step responses, tuning notes and calibration data.",
    href: "/docs/test-log.pdf",
    kind: "DOC",
  },
];
