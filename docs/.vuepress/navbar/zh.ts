import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/zh/",
    "/zh/portfolio",
    "/zh/demo/",
    {
        text: "笔记",
        icon: "lightbulb",
        prefix: "/zh/note/",
        activeMatch: "^/zh/note",
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
                children: [
                    {
                        text: "绪论",
                        icon: "book",
                        link: "Intro/"
                    },
                    {
                        text: "并发",
                        icon: "book",
                        link: "Concurrency/"
                    }],
            },
        ],
    },
    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);
