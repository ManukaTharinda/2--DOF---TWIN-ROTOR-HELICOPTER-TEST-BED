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
    description: "Setup, calibration, power-up sequence and safe operating limits for TRT-01.",
    href: "/docs/user-manual.pdf",
    kind: "PDF",
  },
  {
    code: "DOC-02",
    title: "Project Report",
    description: "Full write-up: objectives, modeling, controller design and results.",
    href: "/docs/project-report.pdf",
    kind: "PDF",
  },

  {
    code: "DOC-04",
    title: "Controller Source Code",
    description: "Firmware and control-loop source, packaged as a zip archive.",
    href: "/docs/source-code.zip",
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
    title: "Test & Calibration Log",
    description: "Recorded step responses, tuning notes and calibration data.",
    href: "/docs/test-log.pdf",
    kind: "DOC",
  },
];
