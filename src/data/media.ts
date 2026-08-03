// Photos: drop images into /public/media/photos/ and list them here.
// Video: drop an mp4 into /public/media/video/ (or use a YouTube embed id below).

export type Photo = {
  src: string;
  caption: string;
};

export const photos: Photo[] = [
  { src: "/media/photos/01-rig-front.jpg", caption: "Full assembly — front view" },
  { src: "/media/photos/02-pivot-detail.jpg", caption: "Pitch/yaw pivot detail" },
  { src: "/media/photos/03-electronics.jpg", caption: "Driver & controller board" },
  { src: "/media/photos/04-bench-test.jpg", caption: "Bench test in progress" },
  { src: "/media/photos/05-team-build.jpg", caption: "Team build session" },
  { src: "/media/photos/06-final-rig.jpg", caption: "Completed test bed" },
];

// Set to a local file (e.g. "/media/video/demo.mp4") or a YouTube video ID.
export const demoVideo = {
  localSrc: "/media/video/demo.mp4",
  youtubeId: "", // e.g. "dQw4w9WgXcQ" — leave empty to use localSrc instead
  poster: "/media/photos/04-bench-test.jpg",
};
