const e=(r,t)=>!t||!r.startsWith(t)?r:r.substring(t.length),i=(r,t)=>!t||!r.endsWith(t)?r:r.substring(0,r.length-t.length),_=(r,t)=>r.endsWith(t)?r:r+t,g=(r,t,u)=>{const{name:l}=t,n=(o=>o?i(e(i(o,".git"),"git+"),"/"):null)(t.repository?typeof t.repository=="string"?t.repository:t.repository.url:null),h=t.homepage??null,s=!t.private&&!!t.exports&&t.version!=="0.0.1",m=s?"https://www.npmjs.com/package/"+t.name:null,p=s&&n?n+"/blob/main/CHANGELOG.md":null,w=a(l),f=n?e(n,"https://github.com/").split("/")[0]:null;return{url:r,package_json:t,src_json:u,name:l,repo_name:w,repo_url:n,owner_name:f,homepage_url:h,npm_url:m,changelog_url:p,published:s}},a=r=>r[0]==="@"?r.split("/")[1]:r,y=r=>e(new URL(r).host,"www.");export{i as a,_ as e,y as f,g as p,e as s};