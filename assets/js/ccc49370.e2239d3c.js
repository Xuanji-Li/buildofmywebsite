"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[103],{8665:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(3366),n=a(7294),r=a(6010),i=a(7019),s=a(9960),o="sidebar_q+wC",m="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",d="sidebarItem_cjdF",g="sidebarItemLink_zyXk",u="sidebarItemLinkActive_wcJs",v=a(5999);function p(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(o,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var b=["sidebar","toc","children"];var h=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,l.Z)(e,b),m=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l=a(7294),n=a(1217),r=a(8665),i=a(2544),s=a(5999),o=a(9960);var m=function(e){var t=e.nextItem,a=e.prevItem;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(o.Z,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(3616),d=a(1575);var g=function(e){var t,a=e.content,s=e.sidebar,o=a.frontMatter,g=a.assets,u=a.metadata,v=u.title,p=u.description,b=u.nextItem,h=u.prevItem,E=u.date,_=u.tags,f=u.authors,N=o.hide_table_of_contents,k=o.keywords,Z=o.toc_min_heading_level,L=o.toc_max_heading_level,w=null!=(t=g.image)?t:o.image;return l.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:s,toc:!N&&a.toc&&a.toc.length>0?l.createElement(d.Z,{toc:a.toc,minHeadingLevel:Z,maxHeadingLevel:L}):void 0},l.createElement(n.Z,{title:v,description:p,keywords:k,image:w},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:E}),f.some((function(e){return e.url}))&&l.createElement("meta",{property:"article:author",content:f.map((function(e){return e.url})).filter(Boolean).join(",")}),_.length>0&&l.createElement("meta",{property:"article:tag",content:_.map((function(e){return e.label})).join(",")})),l.createElement(i.Z,{frontMatter:o,assets:g,metadata:u,isBlogPostPage:!0},l.createElement(a,null)),(b||h)&&l.createElement(m,{nextItem:b,prevItem:h}))}},6753:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(7294),n=a(5999),r=a(7462),i=a(3366),s=a(6010),o="iconEdit_mS5F",m=["className"];var c=function(e){var t=e.className,a=(0,i.Z)(e,m);return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=a(3616);function g(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},l.createElement(c,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1575:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7462),n=a(3366),r=a(7294),i=a(6010),s=a(5002),o="tableOfContents_vrFS",m=["className"];var c=function(e){var t=e.className,a=(0,n.Z)(e,m);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},r.createElement(s.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7462),n=a(3366),r=a(7294),i=a(3616),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,l=e.linkClassName,n=e.isChild;return t.length?r.createElement("ul",{className:n?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,g=e.linkActiveClassName,u=void 0===g?void 0:g,v=e.minHeadingLevel,p=e.maxHeadingLevel,b=(0,n.Z)(e,s),h=(0,i.LU)(),E=null!=v?v:h.tableOfContents.minHeadingLevel,_=null!=p?p:h.tableOfContents.maxHeadingLevel,f=(0,i.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:_}),N=(0,r.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:E,maxHeadingLevel:_}}),[d,u,E,_]);return(0,i.Si)(N),r.createElement(o,(0,l.Z)({toc:f,className:m,linkClassName:d},b))}},2544:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(7294),n=a(6010),r=a(3905),i=a(5999),s=a(9960),o=a(3616),m=a(7707),c=a(1217),d=a(6753),g={blogPostData:"blogPostData_A2Le",blogPostDetailsFull:"blogPostDetailsFull_2lop"};var u=function(e){var t,a,u,v=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,b=e.frontMatter,h=e.metadata,E=e.truncated,_=e.isBlogPostPage,f=void 0!==_&&_,N=h.date,k=h.formattedDate,Z=h.permalink,L=h.tags,w=h.readingTime,C=h.title,T=h.editUrl,P=b.author,I=b.image,x=b.keywords,y=b.author_url||b.authorURL,A=b.author_title||b.authorTitle,H=b.author_image_url||b.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:x,image:I}),l.createElement("article",{className:f?void 0:"margin-bottom--xl"},(u=f?"h1":"h2",l.createElement("header",null,l.createElement(u,{className:g.blogPostTitle},f?C:l.createElement(s.Z,{to:Z},C)),l.createElement("div",{className:(0,n.Z)(g.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:N},k),w&&l.createElement(l.Fragment,null," \xb7 ",v(w))),l.createElement("div",{className:"avatar margin-vert--md"},H&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:y},l.createElement("img",{src:H,alt:P})),l.createElement("div",{className:"avatar__intro"},P&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:y},P)),l.createElement("small",{className:"avatar__subtitle"},A)))))),l.createElement("div",{className:"markdown"},l.createElement(r.Zo,{components:m.Z},p)),(L.length>0||E)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[g.blogPostDetailsFull]=f,t))},L.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var t=e.label,a=e.permalink;return l.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),f&&T&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:T})),!f&&E&&l.createElement("div",{className:"col text--right"},l.createElement(s.Z,{to:h.permalink,"aria-label":"Read more about "+C},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);