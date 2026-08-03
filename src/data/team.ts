// Edit this file to add your real team details.
// photo: drop a headshot into /public/team/ and reference it here, e.g. "/team/asha.jpg".
// If photo is left as null, the initials avatar is shown instead.

export type TeamMember = {
  name: string;
  role: string;
  focus: string; // subsystem or task they own on the project
  photo: string | null;
  link?: string; // optional: LinkedIn, GitHub, email, etc.
};

export const team: TeamMember[] = [

  {
    name: "ENG.H.G.C.R.Laksiri",
    role: "Supervisor",
    focus: "Project Supervisor",
    photo:  "/team/Lakshan.jpg",
    link: "#",
  },
  {
    name: "M.L.E.Kavinda",
    role: "UWU/BET/21/004",
    focus: "Cordination of Project, MATLAB Simulations,Mechanical Drawings",
    photo:  "/team/Lakshan.jpg",
    link: "#",
  },
  {
    name: "K.D.C.Prabhath",
    role: " UWU/BET/21/008 ",
    focus: "3D Printing & Assembling Parts,GUI,Doccumentation",
    photo: null,
    link: "#",
  },
  {
    name: "P.A.L.S.Kavinda",
    role: "UWU/BET/21/072",
    focus: "3D Printing & Assembling, Doccumentation",
    photo: "/team/Lakshan.jpg",
    link: "#",
  },
  {
    name: "W.M.M.T.Dissanayaka",
    role: "UWU/BET/21/090",
    focus: "Developed The Source Code For Microcontroller",
    photo: "/team/Manuka.jpg",
    link: "https://www.linkedin.com/in/manuka-tharinda-a18a2a247/",
  },
  {
    name: "E.M.D. Ekanayaka",
    role: "UWU/BET/21/090",
    focus: "Doccumentation Works,Electrical wiring,3D Printing",
    photo: null,
    link: "#",
  },
];
