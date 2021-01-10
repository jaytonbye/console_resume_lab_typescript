interface Person {
  name: string;
  career: string;
  description: string;
  interests: string[];
  pastJobs: string[];
  skills: string[];
}

let me: Person = {
  name: "Jason Layton",
  career: "Entrepreneur",
  description:
    "I love so many things, I'm am passionate about my time on this earth and what I am doing with it.",
  interests: [
    "snowboarding",
    "wrestling",
    "piano",
    "singing",
    "coding",
    "reading books",
    "much more",
  ],
  pastJobs: [
    "drug dealer",
    "mob boss",
    "cartel consigliere",
    "international man of mystery",
  ],
  skills: [
    "piano",
    "writing",
    "math",
    "business",
    "sales",
    "freestyle rapping",
  ],
};

console.log(me.name.toUpperCase());
console.log(me.career);
console.log(me.description);
console.log("My Interests:");

for (let interest of me.interests) {
  console.log("*" + interest);
}

console.log("My previous experience:");

for (let job of me.pastJobs) {
  console.log("*" + job);
}

console.log("My skills:");
