import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/zh/",
    "/zh/portfolio",
    "/zh/demo/",
    {
        text: "笔记",
        icon: "lightbulb",
        prefix: "/zh/note/",
        children: [
            {
                text: "试水笔记",
                icon: "lightbulb",
                prefix: "",
                children: ["first-note"]
            },
            {
                text: "计算机操作系统",
                icon: "book",
                prefix: "os/",
                children: ["Intro/", "Concurrency/", "Virtualization/"],
            },
        ],
    },
    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);
