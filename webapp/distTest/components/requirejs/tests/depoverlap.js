require(["require","uno"],function(e,t){doh.register("depoverlap",[function(e){for(var n,r,i,o=document.getElementsByTagName("script"),a={},n=o.length-1;n>-1;n--)r=o[n].getAttribute("data-requiremodule"),r&&(r in a||(a[r]=0),a[r]+=1);for(prop in a)e.is(1,a[prop]);e.is("uno",t.name),i=t.doSomething(),e.is("dos",i.dosName),e.is("tres",i.tresName)}]),doh.run()});