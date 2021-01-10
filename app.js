"use strict";
var me = {
    name: "Jason Layton",
    career: "Entrepreneur",
    description: "I love so many things, I'm am passionate about my time on this earth and what I am doing with it.",
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
for (var _i = 0, _a = me.interests; _i < _a.length; _i++) {
    var interest = _a[_i];
    console.log("*" + interest);
}
console.log("My previous experience:");
for (var _b = 0, _c = me.pastJobs; _b < _c.length; _b++) {
    var job = _c[_b];
    console.log("*" + job);
}
console.log("My skills:");
