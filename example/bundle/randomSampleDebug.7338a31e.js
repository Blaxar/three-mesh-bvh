var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire4485;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequire4485=o);var i=o("hGT0Q"),r=o("W2bOH"),a=o("aBPXg");let s,d,c;i.Mesh.prototype.raycast=a.acceleratedRaycast,i.BufferGeometry.prototype.computeBoundsTree=a.computeBoundsTree,i.BufferGeometry.prototype.disposeBoundsTree=a.disposeBoundsTree;let l=[],p=null;function w(){if(null===p)throw new Error;const e=2e31;return p=(1103515245*p+12345)%e,p/e}!function(){s=new i.WebGLRenderer({antialias:!0}),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(1118481,1),s.outputEncoding=i.sRGBEncoding,document.body.appendChild(s.domElement),c=new i.Scene;const e=new i.DirectionalLight(16777215,1);e.position.set(1,1,1),c.add(e),c.add(new i.AmbientLight(11583173,.8)),d=new i.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),d.position.set(0,0,4),d.far=100,d.updateProjectionMatrix(),new r.OrbitControls(d,s.domElement);const n={strategy:a.AVERAGE,packData:!1,maxDepth:1},t=new i.TorusBufferGeometry(1,1,40,10);t.computeBoundsTree(n),p=7830035629,w();for(var o=0;o<10;o++){let e=new i.Mesh(t,new i.MeshStandardMaterial);if(e.rotation.x=10*w(),e.rotation.y=10*w(),e.rotation.z=10*w(),e.position.x=w(),e.position.y=w(),e.position.z=w(),2===o){l.push(e),c.add(e);const n=e.clone();n.material=new i.MeshBasicMaterial({wireframe:!0,color:16737894}),c.add(n);const t=new a.MeshBVHVisualizer(e,10);c.add(t)}e.updateMatrix(!0),e.updateMatrixWorld(!0)}p=4697211981,w();const u=new i.Raycaster;u.firstHitOnly=!1,u.ray.origin.set(10*w(),10*w(),10*w()),u.ray.direction.copy(u.ray.origin).multiplyScalar(-1).normalize();const f=new i.SphereBufferGeometry(.1),y=new i.Mesh(f);y.position.copy(u.ray.at(0,new i.Vector3)),c.add(y);const h=u.intersectObjects(l,!0);u.firstHitOnly=!0;const m=u.intersectObjects(l,!0);t.boundsTree=null;const g=u.intersectObjects(l,!0);console.log("FIRST HIT",m),console.log("BVH HITS",h),console.log("OG HITS",g);const T=y.clone();T.position.copy(m[0].point),c.add(T);const x=y.clone();x.position.copy(h[0].point),c.add(x);const B=new i.Line;B.geometry.setFromPoints([u.ray.at(0,new i.Vector3),u.ray.at(20,new i.Vector3)]),c.add(B),window.addEventListener("resize",(function(){d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}),!1)}(),function e(){requestAnimationFrame(e),s.render(c,d)}();
//# sourceMappingURL=randomSampleDebug.7338a31e.js.map
