"use strict";(self.webpackChunkkj7kunal_github_io=self.webpackChunkkj7kunal_github_io||[]).push([[493,415],{8539:function(e,t,n){var l=n(4794),a=n(6540);const r="block pt-12 md:flex",o="pb-6 md:w-full md:max-w-150 md:p-0",s="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",c="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20",i="hover:underline hover:text-blue-500";t.A=e=>{let{title:t,link:n,children:m}=e,d=a.createElement(l.Link,{to:n},t);return a.createElement("div",{className:r},a.createElement("div",{className:o},a.createElement("h2",{className:`${s} ${n?i:""}`},n?d:t)),a.createElement("div",{className:c},m))}},4078:function(e,t,n){var l=n(4794),a=n(6540);const r="mb-6",o="font-semibold text-gray-900 pb-1",s="text-md text-gray-600 font-light";t.A=e=>{let t,{name:n,description:c,link:i=!1,internal:m=!1}=e;return t=m?a.createElement(l.Link,{to:i},n):a.createElement("a",{href:i},n),a.createElement("div",{className:r},a.createElement("h3",{className:`${o} ${i?"hover:underline hover:text-blue-500":""}`},i?t:n),a.createElement("p",{className:s},c))}},3729:function(e,t,n){n.r(t);var l=n(6540),a=n(4794),r=n(8776),o=n(122);const s="text-lg font-bold",c="underline";t.default=()=>l.createElement(r.A,null,l.createElement(o.A,{title:"Not found"}),l.createElement("h1",{className:s},"404: Not Found"),l.createElement("p",null,"You just hit a route that doesn't exist."," ",l.createElement(a.Link,{className:c,to:"/"},"Return to safety"),"."))},394:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(6540),a=n(8539),r=n(4078);var o=e=>{let{posts:t}=e;return l.createElement(a.A,{title:"All Blog Posts"},t.map((e=>l.createElement(r.A,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0}))))},s=n(203),c=n(8776),i=n(122),m=n(3729);var d=e=>{let{data:t}=e;const n=t.allMarkdownRemark.edges,a=!n||!n.length;return n&&n.length?l.createElement(c.A,null,l.createElement(i.A,{title:"Blog"}),l.createElement(s.A,{metadata:t.site.siteMetadata}),!a&&l.createElement(o,{posts:n})):l.createElement(m.default,null)}}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-08697866fe88fb55ce20.js.map