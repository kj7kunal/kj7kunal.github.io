"use strict";(self.webpackChunkkj7kunal_github_io=self.webpackChunkkj7kunal_github_io||[]).push([[279],{8539:function(e,t,n){var a=n(4794),l=n(6540);const r="block pt-12 md:flex",i="pb-6 md:w-full md:max-w-150 md:p-0",m="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",c="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20",s="hover:underline hover:text-blue-500";t.A=e=>{let{title:t,link:n,children:o}=e,d=l.createElement(a.Link,{to:n},t);return l.createElement("div",{className:r},l.createElement("div",{className:i},l.createElement("h2",{className:`${m} ${n?s:""}`},n?d:t)),l.createElement("div",{className:c},o))}},4078:function(e,t,n){var a=n(4794),l=n(6540);const r="mb-6",i="font-semibold text-gray-900 pb-1",m="text-md text-gray-600 font-light";t.A=e=>{let t,{name:n,description:c,link:s=!1,internal:o=!1}=e;return t=o?l.createElement(a.Link,{to:s},n):l.createElement("a",{href:s},n),l.createElement("div",{className:r},l.createElement("h3",{className:`${i} ${s?"hover:underline hover:text-blue-500":""}`},s?t:n),l.createElement("p",{className:m},c))}},4156:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(8156),l=n.n(a),r=n(6540),i=n(203),m=n(8776),c=n(8539);var s=e=>{let{about:t}=e;return r.createElement(c.A,{title:"About Me",link:"/blog/more-about"},r.createElement("div",{className:"mb-6"},r.createElement("p",null,t," ",r.createElement("a",{class:"text-gray-400 hover:text-blue-500 hover:underline",href:"/blog/more-about"},"Learn More"))))},o=n(4794),d=n(4078);var u=e=>{let{posts:t}=e;return r.createElement(c.A,{title:"Latest Posts"},t.slice(0,3).map((e=>r.createElement(d.A,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0}))),t.length>=3&&r.createElement(o.Link,{className:"text-gray-500 text-sm hover:text-blue-500",to:"/blog"},"View all posts →"))};const p="mb-6",E="font-semibold text-gray-900 pb-1",k="text-md text-gray-600 font-light";var h=e=>{let t,{name:n,description:a,link:l=!1,internal:i=!1}=e;return t=i?r.createElement(o.Link,{to:l},n):r.createElement("a",{href:l},n),r.createElement("div",{className:p},r.createElement("h3",{className:`${E} ${l?"hover:underline hover:text-blue-500":""}`},l?t:n),r.createElement("div",{className:k},a.map((e=>r.createElement("p",null,e.text)))))};var g=e=>{let{education:t}=e;return t.length?r.createElement(c.A,{title:"Education"},t.map((e=>r.createElement(h,{key:e.name,name:e.name,description:e.description,link:e.link})))):null};var x=e=>{let{experience:t}=e;return t.length?r.createElement(c.A,{title:"Experience"},t.map((e=>r.createElement(d.A,{key:e.name,name:e.name,description:e.description,link:e.link})))):null};var b=e=>{let{projects:t}=e;return t.length?r.createElement(c.A,{title:"Projects"},t.map((e=>r.createElement(d.A,{key:e.name,name:e.name,description:e.description,link:e.link})))):null};var v=e=>{let{skills:t}=e;return r.createElement(c.A,{title:"Skills"},t.map((e=>r.createElement(d.A,{key:e.name,name:e.name,description:e.description}))))},f=n(122);var A=e=>{let{data:t}=e;const n=l()(t,"site.siteMetadata.about",!1),a=l()(t,"site.siteMetadata.experience",!1),c=l()(t,"site.siteMetadata.projects",!1),o=t.allMarkdownRemark.edges,d=l()(t,"site.siteMetadata.education",!1),p=l()(t,"site.siteMetadata.skills",!1),E=!o||!o.length;return r.createElement(m.A,null,r.createElement(f.A,null),r.createElement(i.A,{metadata:t.site.siteMetadata,noBlog:E}),n&&r.createElement(s,{about:n}),a&&a.length&&r.createElement(x,{experience:a}),c&&c.length&&r.createElement(b,{projects:c}),!E&&r.createElement(u,{posts:o}),d&&d.length&&r.createElement(g,{education:d}),p&&p.length&&r.createElement(v,{skills:p}))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-0350c4d29087d8eb7ef9.js.map