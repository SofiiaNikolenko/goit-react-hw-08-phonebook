"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[107],{107:function(t,n,e){e.r(n),e.d(n,{default:function(){return w}});var a=e(942),c=e(413),s=e(439),o=e(791),r=e(434),i=e(162),l=function(t){return t.contacts.items},m=function(t){return t.contacts.isLoading},u="ContactForm_contactForm__y0Rca",d=e(184),h=function(){var t=(0,r.v9)(l),n=(0,r.I0)(),e=(0,o.useState)({name:"",phone:""}),m=(0,s.Z)(e,2),h=m[0],_=m[1],f=function(t){var n=t.target,e=n.name,s=n.value;_((0,c.Z)((0,c.Z)({},h),{},(0,a.Z)({},e,s)))};return(0,d.jsxs)("form",{className:u,autoComplete:"off",onSubmit:function(e){e.preventDefault();var a=h.name,c=h.phone;t.some((function(t){return t.name===a}))?alert("".concat(a," is already in contacts")):(n((0,i.je)({name:a,number:c.toString()})),_({name:"",phone:""}))},children:[(0,d.jsxs)("label",{children:["Name",(0,d.jsx)("input",{type:"text",name:"name",value:h.name,onChange:f})]}),(0,d.jsxs)("label",{children:["Number",(0,d.jsx)("input",{type:"tel",name:"phone",value:h.phone,onChange:f})]}),(0,d.jsx)("button",{type:"submit",children:"Add contact"})]})},_={contactItem:"ContactItem_contactItem__aUSMv",contactName:"ContactItem_contactName__zpIwE",contactNumber:"ContactItem_contactNumber__5zn6-",deleteBtn:"ContactItem_deleteBtn__I0oEU"},f=function(t){var n=t.id,e=t.name,a=t.number,c=(0,r.I0)();return(0,d.jsxs)("li",{className:_.contactItem,children:[(0,d.jsxs)("div",{className:_.contactInfo,children:[(0,d.jsxs)("span",{className:_.contactName,children:[e,":"]})," ",(0,d.jsx)("span",{className:_.contactNumber,children:a})]}),(0,d.jsx)("button",{className:_.deleteBtn,type:"button",onClick:function(t){c((0,i.xX)(n))},children:"Delete"})]})},p=function(t){return t.filter},v="ContactList_contactList__UFVCg",x="ContactList_noContacts__-QuDG";var j=function(){var t=(0,r.v9)(l),n=(0,r.v9)(p),e=t.filter((function(t){return t.name.toUpperCase().includes(n.toUpperCase())}));return(0,d.jsx)("div",{className:v,children:0===t.length?(0,d.jsx)("p",{className:x,children:"No contacts available."}):e.map((function(t){var n=t.id,e=t.name,a=t.phone;return(0,d.jsx)(f,{id:n,name:e,number:a},Number(n))}))})},C=e(441),N=e(78),b="Filter_filter__vxThR";var I=function(){var t=(0,r.I0)();return(0,d.jsxs)("div",{className:b,children:[(0,d.jsx)("label",{htmlFor:"findContacts",children:"Find contacts by name"}),(0,d.jsx)("input",{type:"text",id:"findContacts",onChange:function(n){t((0,N.bI)(n.target.value))},placeholder:"Enter contact name"})]})},g="Contacts_contactsContainer__7xvg8",k="Contacts_contactsNoContacts__dsc8G",y="Contacts_contactsComponents__99fls",F="Contacts_contactsForm__UlpEi",U="Contacts_contactsList__OMbvS",w=function(){var t=(0,r.I0)(),n=(0,r.v9)((function(t){return t.auth.token})),e=(0,r.v9)(m);return(0,o.useEffect)((function(){n&&t((0,i.VC)())}),[n,t]),(0,d.jsx)("div",{className:g,children:e?(0,d.jsx)(C.Z,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsxs)("div",{className:y,children:[(0,d.jsxs)("div",{className:F,children:[(0,d.jsx)(h,{}),(0,d.jsx)(I,{})]}),(0,d.jsxs)("div",{className:U,children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(j,{}),(0,d.jsx)("p",{className:k,children:"No contacts available."})]})]})]})})}}}]);
//# sourceMappingURL=107.bb8191b3.chunk.js.map