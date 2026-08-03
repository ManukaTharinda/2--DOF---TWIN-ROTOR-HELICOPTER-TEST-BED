// Photos: drop images into /public/media/photos/ and list them here.
// Video: drop an mp4 into /public/media/video/ (or use a YouTube embed id below).

export type Photo = {
  src: string;
  caption: string;
};

export const photos: Photo[] = [
  { src: "/media/photos/testbed.jpg", caption: "Full assembly — front view" },
  { src: "/media/photos/3D.jpg", caption: "Parts 3D Printing" },
  { src: "/media/photos/DevBoard.jpg", caption: "controller board" },
  { src: "/media/photos/esc.jpg", caption: "Bidirectional Esc" },
];

// Set to a local file (e.g. "/media/video/demo.mp4") or a YouTube video ID.
export const demoVideo = {
  localSrc: "/media/video/Testbed.MP4",
  youtubeId: "", // e.g. "dQw4w9WgXcQ" — leave empty to use localSrc instead
  poster: "/media/photos/04-bench-test.jpg",
};
