(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},28:function(e,t,a){e.exports=a(46)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(10),o=a.n(l),i=(a(33),a(7)),s=a(6),c=a(26),m=(a(34),a(11)),u=a(12),p=a(14),d=a(13),h=a(15),f=(a(35),[160,8240,8256,8480,8496,8592,8608,8976,8992,9152,9184,9200,9408,9632,9648,9664,9712,9728,9744,9760,9776,9792,9808,9824,9840,9872,9888,9904,9920,9936,9952,9968,9984,1e4,10016,10032,10048,10064,10080,10128,10144,10160,10544,11008,11024,11088,12336,12944,126976,127168,127344,127360,127376,127488,127504,127520,127536,127568,127744,127760,127776,127792,127808,127824,127840,127856,127872,127888,127904,127920,127936,127952,127968,127984,128e3,128016,128032,128048,128064,128080,128096,128112,128128,128144,128160,128176,128192,128208,128224,128240,128256,128272,128288,128304,128320,128336,128352,128368,128384,128400,128416,128432,128448,128464,128480,128496,128512,128528,128544,128560,128576,128640,128656,128672,128688,128704,128720,128736,128752,128992,129280,129296,129312,129328,129344,129360,129376,129392,129408,129424,129440,129456,129472,129488,129504,129520,129648,129664,129680]),g=function(){var e=f[Math.floor(Math.random()*f.length)]+Math.floor(16*Math.random());return String.fromCodePoint(e)},v=90,w=!1,E=.22,b=.03,y=7,k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e)))._backgroundOnfirstClick=function(e){a.setState({background:!0})},a._renderText=function(){if(a.props.width&&a.props.height){var e=g();w&&a.canvasCtx.clearRect(0,0,a.props.width,a.props.height),a.canvasCtx.fillText(e,Math.round(a.props.width/2),Math.round(a.props.height/2)),setTimeout(function(){for(var e=0;e<y;e++){var t=Math.floor(Math.random()*a.props.width),r=Math.floor(Math.random()*a.props.height),n=E*a.props.width,l=E*a.props.height,o=t-n/2,i=r-l/2,s=o+(2*Math.random()-1)*(a.props.width*b),c=i+(2*Math.random()-1)*(a.props.height*b),m=a.canvasCtx.getImageData(o,i,n,l),u=a.canvasCtx.getImageData(s,c,n,l);a.canvasCtx.putImageData(m,s,c),a.canvasCtx.putImageData(u,o,i)}},v/2)}},a.canvasRef=n.a.createRef(),a.canvasCtx=null,a.intervalHandle=null,a.state={background:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this._refsUpdated(),this._propsUpdated(),this.intervalHandle=setInterval(this._renderText,v)}},{key:"componentDidUpdate",value:function(){this._propsUpdated()}},{key:"componentWillUnmount",value:function(){this.intervalHandle&&clearInterval(this.intervalHandle)}},{key:"render",value:function(){var e="BackgroundCanvas"+(this.state.background?" background":"");return n.a.createElement("canvas",{className:e,width:this.props.width,height:this.props.height,ref:this.canvasRef,onClick:this.state.background?void 0:this._backgroundOnfirstClick,onTouchEnd:this.state.background?void 0:this._backgroundOnfirstClick})}},{key:"_refsUpdated",value:function(){this.canvasCtx=this.canvasRef.current.getContext("2d")}},{key:"_propsUpdated",value:function(){this.canvasCtx.fillStyle="white";var e=Math.round(.7*Math.max(this.props.width,this.props.height));this.canvasCtx.font="".concat(e,"px monospace"),this.canvasCtx.textAlign="center",this.canvasCtx.textBaseline="middle"}}]),t}(n.a.Component),j=(a(36),function(e){var t=e.children;return n.a.createElement("div",{className:"TileContainer"},t)});a(20);function N(e,t){var a=t.header,l=t.date,o=t.activityType,i=t.preview;return n.a.createElement(r.Fragment,null,n.a.createElement("div",{key:"header",className:"Tile__header"},n.a.createElement("span",null,a),e?n.a.createElement("img",{className:"Tile__external-link",src:"/images/external-link.svg",alt:"home"}):null),n.a.createElement("div",{key:"preview",className:"Tile__body"},i),n.a.createElement("div",{key:"footer",className:"Tile__footer"},n.a.createElement("div",{key:"date",className:"Tile__date"},l)," | ",n.a.createElement("div",{key:"activityType",className:"Tile__activityType"},o)))}var T=function(e){var t=e.url.startsWith("https://")||e.url.startsWith("http://");return n.a.createElement("div",{className:"Tile"},t?n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},N(t,e)):n.a.createElement(i.b,{to:e.url},N(t,e)))},x=function(e){return n.a.createElement("div",{className:"Tile"},n.a.createElement("div",{className:"Tile__header"},n.a.createElement("span",null,"Contact")),n.a.createElement("div",{className:"Tile__body"},n.a.createElement("div",null,n.a.createElement("img",{src:"/images/external-link.svg",alt:"external link"}),n.a.createElement("a",{href:"https://github.com/sebpiq"},"github")),n.a.createElement("div",null,n.a.createElement("img",{src:"/images/external-link.svg",alt:"external link"}),n.a.createElement("a",{href:"mailto://sebpiq@gmail.com"},"email")),n.a.createElement("div",null,n.a.createElement("img",{src:"/images/external-link.svg",alt:"external link"}),n.a.createElement("a",{href:"https://vimeo.com/sebpiq/"},"vimeo"))))},F=(a(41),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e)))._scrollToTop=function(){a.pageRef.current.scrollTo(0,0)},a.pageRef=n.a.createRef(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="Page "+(this.props.className||"");return n.a.createElement("div",{className:e,ref:this.pageRef},this.props.children,n.a.createElement("button",{className:"Page__scroll_to_top",onClick:this._scrollToTop},"^"))}}]),t}(n.a.Component)),S=(a(42),function(e){return n.a.createElement("h1",{className:"PageTitle"},n.a.createElement(i.b,{to:"/",className:"PageTitle__navigate_index"},n.a.createElement("span",null,"<")),n.a.createElement("span",{className:"PageTitle__text"},e.text))});function U(e){var t=e.videoId,a="https://player.vimeo.com/video/".concat(t,"?portrait=0");return n.a.createElement(r.Fragment,null,n.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},n.a.createElement("iframe",{src:a,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0})),n.a.createElement("script",{src:"https://player.vimeo.com/api/player.js"}))}a(43);var C=function(e){return n.a.createElement("div",{className:"CenteredImage"},n.a.createElement("img",Object.assign({src:e.src,key:e.src,alt:e.alt||e.src},e)))},M=function(){return n.a.createElement(F,null,n.a.createElement(S,{text:"Freedom Portal"}),n.a.createElement("p",null,"\u200b The Freedom Portal project was developed in collaboration with ",n.a.createElement("a",{href:"https://tim-shaw.net/"},"Tim Shaw")," as a platform to organize unauthorized shows in the public space. It was first prototyped in a residency at ",n.a.createElement("a",{href:"https://www.stereolux.org/"},"Stereolux")),n.a.createElement("p",null,"The platform works in the following way :"),n.a.createElement("ul",null,n.a.createElement("li",null,"We choose a public venue where to organize a show."),n.a.createElement("li",null,"We create there an official-looking WiFi network, by plugging-in wireless routers to sockets on the wall."),n.a.createElement("li",null,"We let visitors be tricked into connecting to this network. They will unintentionally experience the installation as it pops-up onto their phones.")),n.a.createElement("h2",null,"Third Space Helsinki collaboration"),n.a.createElement(U,{videoId:"254006804"}),n.a.createElement("p",null,"Throughout 2017, in collaboration with ",n.a.createElement("a",{href:"http://www.th1rdspac3.com/"},"Third Space")," and artists Minna Henriksson and Steve Maher, we produced three works targeting the three biggest art museums in Finland : ",n.a.createElement("b",null,"Kiasma, Ateneum and Kansallismuseo"),". Each work was a rip-off of the museum's official web page, assuming the identity of the institution in order to challenge some of its positions. Together these installations received about 4500 visitors and each lasted for about a month until they were discovered and removed by the museum's staff."),n.a.createElement("h3",null,"Ateneum | Minna Henriksson | Scientific illustrations to keep silent about"),n.a.createElement("p",null,"The intervention adds to knowledge about the oeuvre of the widely loved von Wright brothers, whose blockbuster exhibition opened in Ateneum in October 2017. In the WiFi network of Ateneum we could see what the exhibition didn\u2019t show. Such were Wilhelm von Wright\u2019s racial studies of Rufina in 1843. Rufina was a 10 years old girl, shipped from Argentina to Sweden all by herself on request of race scientist Anders Retzius, who needed \u201can indigenous specimen\u201d. After the drawings and measurements, she was given to an upper class family in Gothenburg as servant. ",n.a.createElement("a",{href:"http://minnahenriksson.com"},"http://minnahenriksson.com")),n.a.createElement(C,{src:"/images/projects/freedom-portal-8.png"}),n.a.createElement("h3",null,"Kansallismuseo | Steve Maher | N\xf3r\xeb Carm\xebcoa"),n.a.createElement("p",null,"The Finnish National Museum's website Translated to Tolkien's High Elvish, Quenya, which is based on Finnish. The project reflects on the nature of national institutions as venues through which state actors mythpoecise the past in the process of building national identity. ",n.a.createElement("a",{href:"http://www.stevemaher.net/"},"http://www.stevemaher.net/")),n.a.createElement(C,{src:"/images/projects/freedom-portal-9.png"}),n.a.createElement("h3",null,"Kiasma | Third Space collective | Un-allowed Open Call"),n.a.createElement("p",null,'Installed during the "ARS17 - Hello World!" exhibition. Each visitor can submit their artworks as a file, and these would be (supposedly) considered for inclusion into Kiasma\'s permanent exhibition. Large parts of the open call text are directly copied from the actual website of Kiasma.'),n.a.createElement(C,{src:"/images/projects/freedom-portal-10.png"}),n.a.createElement("h2",null,"Electropixel"),n.a.createElement("p",null,"We installed three works as part of ",n.a.createElement("a",{href:"http://electropixel.org/tim-shaw-sebastien-piquemal/"},"electropixel #6")," in Nantes, 2016."),n.a.createElement("h3",null,"S\xe9bastien Piqumal | wlandalisme"),n.a.createElement("p",null,"This piece allows participants to vandalize the public Wi-Fi space by posting a small message of less than 32 characters. Once submitted their text will appear as an available network in that area. To submit your own message connect to the network \u201cwlandalisme\u201d, open a web page, write a message and click on the button to post it. If you fail to post, check that you are still connected to the \u201cwlandalisme\u201d Wi-Fi and try one more time. Then open your phone\u2019s settings to display the list of available Wi-Fi networks in the area. Your message might take a little while to appear."),n.a.createElement(C,{src:"/images/projects/freedom-portal-2.jpg",style:{width:"50%"}}),n.a.createElement("h3",null,"Tom Schofield | 192.168.0.1:Where the WiFi comes from"),n.a.createElement("p",null,"\u2018192.168.0.1:Where the Wi-Fi Comes From\u2019 takes a live image grab of the router at the time of accessing the network. Instead of allowing access to the wider Internet the router remains locked in a self-referential and exhibitionist cycle. The time of access is presented to the user referencing the complex temporal interdependencies of networked technologies."),n.a.createElement(C,{src:"/images/projects/freedom-portal-4.jpg",style:{width:"50%"}}),n.a.createElement("h3",null,"Antonio Roberts \u2013 Freemium Basics"),n.a.createElement("p",null,"\u201cIf you are not paying for it, you\u2019re not the customer; you\u2019re the product being sold\u201d. This phrase said by Andrew Lewis aka blue_beetle in 2010 should make any user wary of using free services. The promises of corporations offering \u201cexclusive\u201d \u201cpremium\u201d gifts \u2013 loyalty cards, free wifi, vouchers etc \u2013 is that it will make your life better, easier, help you, help others, and ultimately make the world a better place. By accepting these \u201cgifts\u201d we give permission to these corporations to enter our lives, track our social, spending, and general living habits. With this information they can greatly influence the opinion and habits of us and our social circles. These free \u201cgifts\u201d, then, come at a price. Using Free Basics (previously Internet.org) as its target, which is Facebook\u2019s failed attempt to gift \u201cfree internet\u201d to India, Freemium Basics sheds light on the dangers of clicking \u201cI Accept\u201d on free services without considering the costs."),n.a.createElement(C,{src:"/images/projects/freedom-portal-3.jpg",style:{width:"50%"}}),n.a.createElement("h2",null,"Supports"),n.a.createElement("a",{href:"https://www.taike.fi"},"Taike")," | ",n.a.createElement("a",{href:"https://tokyo.fi/kipsari"},"Kipsari")," | ",n.a.createElement("a",{href:"https://www.stereolux.org/"},"Stereolux"),n.a.createElement("h2",null,"Links"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/sebpiq/FreedomPortal"},"Source code and instructions to install the system"))))},I=function(){return n.a.createElement(F,null,n.a.createElement(S,{text:"La Jet\xe9e (movie concert)"}),n.a.createElement("p",null,"In the aftermath of World War III, survivors live underground in a post-apocalyptic Paris where scientists research time travel to rescue the present."),n.a.createElement("p",null,"With live narration by David McKechnie, Tim Shaw and S\xe9bastien Piquemal re-score this acclaimed short film by Chris Marker in a performance that explores digital mobile technology and hyperlocal networks for surround sound diffusion."),n.a.createElement(C,{src:"/images/projects/la-jetee-1.jpg"}),n.a.createElement(C,{src:"/images/projects/la-jetee-2.jpg"}),n.a.createElement("p",null,"Image \xa9 ",n.a.createElement("a",{href:"http://www.chrisdonia.co.uk/"},"http://www.chrisdonia.co.uk/")),n.a.createElement("p",null,"This performance was produced by ",n.a.createElement("a",{href:"http://www.mediascot.org/"},"New Media Scotland"),"."),n.a.createElement("h2",null,"Links"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"http://github.com/sebpiq/fields"},"Source code of the Fields system, used in the performance"))))};function P(e){var t=e.videoId,a="//www.youtube.com/embed/".concat(t);return n.a.createElement("iframe",{width:"100%",height:"50%",src:a,frameBorder:"0",allowFullScreen:!0})}var W=function(){return n.a.createElement(F,null,n.a.createElement(S,{text:"Murmurate"}),n.a.createElement(U,{videoId:"144312243"}),n.a.createElement("p",null,n.a.createElement("strong",null,"Murmurate")," (previously called Fields) is a networked system exploring new areas of musical performance and audience participation through the use of mobile technology as a medium for sound diffusion. This project is realized in collaboration with artist ",n.a.createElement("a",{href:"http://tim-shaw.net"},"Tim Shaw"),"."),n.a.createElement(C,{src:"/images/projects/fields-6.jpg"}),n.a.createElement(C,{src:"/images/projects/fields-1-smaller.png"}),n.a.createElement("p",null,"Image \xa9 ",n.a.createElement("a",{href:"http://www.chrisdonia.co.uk/"},"http://www.chrisdonia.co.uk/")),n.a.createElement("p",null,"Murmurate has been performed around Europe and in the USA. Venues include Cafe OTO (UK), FACT Liverpool (UK), Piksel (NOR), Stereolux (FR) Islington Mill (UK), ZDB (PRT), NK Project (DEU), NIME (USA), Talbot Rice Gallery (UK) and Third Space (FIN)."),n.a.createElement("p",null,"Murmurate has been kindly supported by New Media Scotland, Newcastle Institute for Creative Arts Practice, Culture Lab, Media Lab Helsinki, The Creative Exchange and Sound and Music."),n.a.createElement("h2",null,"Links"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"http://github.com/sebpiq/fields"},"Source code of the Fields system, used in Murmurate")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://nime2015.lsu.edu/proceedings/196/index.html"},"Paper in proceedings of NIME 2015"))),n.a.createElement("h2",null,"Supports"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://taike.fi"},"The Finnish Arts Council (Taike)")," | ",n.a.createElement("a",{href:"https://www.aalto.fi/en/aalto-media-lab"},"Media Lab Helsinki")," | ",n.a.createElement("a",{href:"http://www.soundandmusic.org/"},"Sound and Music (UK national agency for New Music)")," | ",n.a.createElement("a",{href:"https://www.ncl.ac.uk/creativearts/"},"NICAP")),n.a.createElement("h2",null,"More videos"),n.a.createElement(U,{videoId:"120524097"}),n.a.createElement(P,{videoId:"P1aj6vwFITI"}))},A=function(){return n.a.createElement(F,null,n.a.createElement(S,{text:"New Weave"}),n.a.createElement(U,{videoId:"120474851"}),n.a.createElement("p",null,n.a.createElement("strong",null,"New Weave")," is an experimental sound performance where the performers improvise with small audio snippets recorded and sent live by audience members with their smartphones."),n.a.createElement("h2",null,"Supports"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://taike.fi"},"The Finnish Arts Council (Taike)")," | ",n.a.createElement("a",{href:"https://www.aalto.fi/en/aalto-media-lab"},"Media Lab Helsinki"),"."),n.a.createElement("h2",null,"Links"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"http://github.com/sebpiq/rhizome"},"Source code of the rhizome system, used in the performance"))))},_=function(){return n.a.createElement(F,null,n.a.createElement(S,{text:"Pure Data And Raspberry Pi Workshops"}),n.a.createElement("p",null,"Teaching how to program and design a pocket-sized instrument with Pure Data and Raspberry Pi."),n.a.createElement(C,{src:"/images/projects/pd-rpi-workshop-3.jpg"}),n.a.createElement(U,{videoId:"98737686"}),n.a.createElement(U,{videoId:"76642179"}),n.a.createElement(U,{videoId:"76307579"}),n.a.createElement("p",null,"Produced by ",n.a.createElement("a",{href:"https://www.cc4av.com/"},"CC4AV")))},L=function(){return n.a.createElement(F,null,n.a.createElement(S,{text:"WebPd"}),n.a.createElement("p",null,"WebPd is a 100% JavaScript Pure Data runtime using Web Audio API to play audio in the browser. It aims at allowing a subset of Pure Data programming language to run in the browser without plugins and with best possible performance."),n.a.createElement("h2",null,"Links"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"http://github.com/sebpiq/WebPd"},"WebPd on github"))))},R=function(){return n.a.createElement(F,null,n.a.createElement(S,{text:"Possessed Rooms"}),n.a.createElement("p",null,n.a.createElement("strong",null,"Possessed rooms")," is a series of parasitic performances happening in public computer rooms. The project is a collaboration with ",n.a.createElement("a",{href:"http://fernandovisockis.net/"},"Fernando Visockis"),"."),n.a.createElement(U,{videoId:"165747866"}),n.a.createElement("p",null,n.a.createElement("strong",null,"possessed room #1")," Media Lab Helsinki, computer room 515."),n.a.createElement("ul",null,n.a.createElement("li",null,"13 desktop computers, custom made software."),n.a.createElement("li",null,"Audio : samples extracted from thousands of random SoundCloud tracks."),n.a.createElement("li",null,"Visuals : Random images of country leaders downloaded from twitter."),n.a.createElement("li",null,"Live recording, 11/03/2016.")),n.a.createElement("h2",{id:"links"},"Links"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"http://github.com/sebpiq/rhizome"},"Source code of the rhizome system, used in the performance"))))},O=(a(44),[{date:"19/02/2017",projectName:"Atmosphere | La Jet\xe9e",projectUrl:"/la-jetee",venue:"Glasgow Film Festival, Scotland"},{date:"10->30/10/2016",projectName:"ParaFonoM",projectUrl:"http://binauralmedia.org/news/en/arquivo/8954",venue:"Nodar residency (SoCCoS), Vouzela, Portugal"},{date:"28/09/2016",projectName:"Murmurate",projectUrl:"/murmurate",venue:"Sight and Sound festival, Montreal, Canada"},{date:"19/08/2016",projectName:"Atmosphere | La Jet\xe9e",projectUrl:"/la-jetee",venue:"Assembly Rooms, Edinburgh, Scotland"},{date:"19->21/08/2016",projectName:"Freedom Portal",projectUrl:"/freedom-portal",venue:"Electropixel, Nantes, France"},{date:"01/07/2016",projectName:"Murmurate",projectUrl:"/murmurate",venue:"The Wired Lab, Wagga-Wagga, Australia"},{date:"14/05/2016",projectName:"Murmurate",projectUrl:"/murmurate",venue:"Cumberland Arms, Newcastle, England"},{date:"13/05/2016",projectName:"Murmurate",projectUrl:"/murmurate",venue:"FACT, Liverpool, England"},{date:"20/04/2016",projectName:"Murmurate",projectUrl:"/murmurate",venue:"Stereolux, Nantes, France"},{date:"13/04/2016",projectName:"Fields Workshop",projectUrl:"/murmurate",venue:"Stereolux, Nantes, France"},{date:"11/04/2016",projectName:"Freedom Portal",projectUrl:"/freedom-portal",venue:"Stereolux residency, Nantes, France"},{date:"19/11/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"Piksel festival, Bergen, Norway"},{date:"10/10/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"Connect the Dots festival, Sheffield, England"},{date:"26/09/2015",projectName:"Murmurate",projectUrl:"/murmurate",venue:"Sanctuary, Galloway, Scotland"},{date:"15/08/2015",projectName:"New Weave",projectUrl:"/newweave",venue:"Flow festival, Helsinki, Finland"},{date:"02/06/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"NIME, Baton Rouge, USA"},{date:"20/05/2015",projectName:"New Weave",projectUrl:"/newweave",venue:"Vapaan Taiteen Tila, Helsinki, Finland"},{date:"23/04/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"Durham Castle, Durham, England"},{date:"22/04/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"Islington Mill, Manchester, England"},{date:"19/04/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"Ulverston Parish Rooms, Ulverston, England"},{date:"17/04/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"EAVI, Goldsmiths, London, England"},{date:"16/04/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"Music Hack Space, London, England"},{date:"14/04/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"The Louisiana Cellar, Bristol, England"},{date:"12/04/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"Cafe OTO, London, England"},{date:"11/04/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"Other Worlds Festival, Blackpool, England"},{date:"09/04/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"Green Door Store, Brighton, England"},{date:"09/04/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"University of Sussex, Brighton, England"},{date:"27/01/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"WAC, Ircam, Paris, France"},{date:"24/01/2015",projectName:"Fields",projectUrl:"/murmurate",venue:"Gap in the Air, Edinburgh, Scotland"},{date:"22/01/2015",projectName:"New Weave",projectUrl:"/newweave",venue:"Third Space, Helsinki, Finland"},{date:"23/11/2014",projectName:"Fields",projectUrl:"/murmurate",venue:"ICLI, Z\xe9 Dos Bois, Lisbo, Portugal"},{date:"27/10/2014",projectName:"Fields",projectUrl:"/murmurate",venue:"NordiCHI, Helsinki, Finland"},{date:"25/10/2014",projectName:"Fields",projectUrl:"/murmurate",venue:"Third Space, Helsinki, Finland"},{date:"10/10/2014",projectName:"Fields",projectUrl:"/murmurate",venue:"NK, Berlin, Germany"},{date:"19/09/2014",projectName:"Fields",projectUrl:"/murmurate",venue:"ICMC, Athens, Greece"},{date:"22/06/2014",projectName:"Fields",projectUrl:"/murmurate",venue:"Mining Institute, Newcastle-upon-Tyne, England"},{date:"08/04/2014",projectName:"Fields",projectUrl:"/murmurate",venue:"Arkadia bookstore, Helsinki, Finland"}]),B=function(){var e=O.map(function(e){return n.a.createElement("li",null,n.a.createElement("span",{className:"Brag__date"},e.date),n.a.createElement("a",{href:e.projectUrl,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"Brag__name"},e.projectName)),n.a.createElement("span",{className:"Brag__venue"},e.venue))});return n.a.createElement(F,{className:"Brag"},n.a.createElement(S,{text:"Present and past activities"}),n.a.createElement("ul",null,e))};a(45);function H(){return n.a.createElement(j,null,n.a.createElement(T,{header:"Past and present activities",activityType:"brag",date:"2014...",url:"/brag",preview:"A list of concerts, talks, lectures, etc ..."}),n.a.createElement(T,{header:"racolage.xxx",activityType:"project",date:"2017...",url:"http://racolage.xxx",preview:"A record label that releases experimental music through spam email, porn streaming sites, tinder, and other spammy release channels..."}),n.a.createElement(T,{header:"Kialo",activityType:"job",date:"2018...",url:"https://kialo.com",preview:'Full-stack web developer at Kialo, a debate platform with the mission of "making the world more thoughtful."'}),n.a.createElement(T,{header:"Freedom Portal",activityType:"project",date:"2016-2017",url:"/freedom-portal",preview:"A platform to organize unauthorized shows in the public space, hosted on Wi-Fi networks."}),n.a.createElement(T,{header:"Volkswagen Future Center",activityType:"job",date:"2018",url:"https://www.volkswagenag.com/en/news/stories/2018/05/never-forget-the-users.html",preview:"Creative Technologist at one of Volkswagen innovation centers. Working on the future of autonomous vehicles and urban mobility."}),n.a.createElement(T,{header:"La Jet\xe9e (movie-concert)",activityType:"project",date:"2016",url:"/la-jetee",preview:"A re-score of short film La Jet\xe9e by Chris Marker, in a performance that explores digital mobile technology and hyperlocal networks for surround sound diffusion."}),n.a.createElement(T,{header:"Murmurate",activityType:"project",date:"2014-2016",url:"/murmurate",preview:"A networked system exploring new areas of musical performance and audience participation through the use of mobile technology as a medium for sound diffusion."}),n.a.createElement(T,{header:"Possessed Rooms",activityType:"project",date:"2016",url:"/possessed-rooms",preview:"A series of parasitic performances happening in public computer rooms."}),n.a.createElement(T,{header:"New Weave",activityType:"project",date:"2015",url:"/new-weave",preview:"An experimental sound performance where the performers improvise with small audio snippets recorded and sent live by audience members with their smartphones."}),n.a.createElement(T,{header:"WebPd",activityType:"code",date:"2012...",url:"/webpd",preview:"A 100% JavaScript Pure Data runtime using Web Audio API to play audio in the browser."}),n.a.createElement(T,{header:"Pure Data and Raspberry Pi",activityType:"workshop",date:"2014",url:"/pure-data-and-raspberry-pi-workshops",preview:"A workshop to teach how to program and design a pocket-sized instrument with Pure Data and Raspberry Pi."}),n.a.createElement(T,{header:"Old Website",activityType:"link",date:"2012",url:"https://sebpiq.github.io/funktion.fm"}),n.a.createElement(x,null))}var D=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(c.a,{handleWidth:!0,handleHeight:!0},n.a.createElement(k,null)),n.a.createElement(i.a,null,n.a.createElement(s.d,null,n.a.createElement(s.b,{path:"/",exact:!0,component:H}),n.a.createElement(s.b,{path:"/freedom-portal/",component:M}),n.a.createElement(s.b,{path:"/la-jetee/",component:I}),n.a.createElement(s.b,{path:"/murmurate/",component:W}),n.a.createElement(s.b,{path:"/new-weave/",component:A}),n.a.createElement(s.b,{path:"/pure-data-and-raspberry-pi-workshops/",component:_}),n.a.createElement(s.b,{path:"/webpd/",component:L}),n.a.createElement(s.b,{path:"/possessed-rooms/",component:R}),n.a.createElement(s.b,{path:"/brag/",component:B}),n.a.createElement(s.a,{from:"/*",to:"/"}),n.a.createElement(s.b,{component:H}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.525567fd.chunk.js.map