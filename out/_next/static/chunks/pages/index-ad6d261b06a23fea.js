(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{78581:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(47075)}])},96301:function(b,e,a){"use strict";var c=a(37917),d=a(63021);b.exports={abi:d,contractAddresses:c}},47075:function(e,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return s}});var f=a(85893),g=a(9008),c=a(7160),h=a.n(c),i=a(34295);function j(){return(0,f.jsxs)("nav",{className:"p-5 border-b-2 flex flex-row",children:[(0,f.jsx)("h1",{className:"py-5 px-5 font-bold text-6xl",children:" De-Raff "}),(0,f.jsx)("div",{className:"ml-auto py-2 px-4",children:(0,f.jsx)(i.NL,{moralisAuth:!1})})]})}var k=a(83078),d=a(34051),l=a.n(d),m=a(96301),n=a(67294),o=a(35553);function p(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}function q(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function d(a){p(g,e,f,d,h,"next",a)}function h(a){p(g,e,f,d,h,"throw",a)}d(void 0)})}}function r(){var s,b=(0,k.Nr)(),t=(b.Moralis,b.isWeb3Enabled),d=parseInt(b.chainId),a=d in m.contractAddresses?m.contractAddresses[d][0]:null,e=(0,n.useState)("0"),g=e[0],z=e[1],h=(0,n.useState)("0"),u=h[0],A=h[1],j=(0,n.useState)("0"),v=j[0],B=j[1],C=(0,i.lm)(),c=(0,k.JX)({abi:m.abi,contractAddress:a,functionName:"enterRaffle",params:{},msgValue:g}),D=c.runContractFunction,p=c.isLoading,r=c.isFetching,w=(0,k.JX)({abi:m.abi,contractAddress:a,functionName:"getEntranceFee",params:{}}),E=w.runContractFunction,x=(0,k.JX)({abi:m.abi,contractAddress:a,functionName:"getNumberOfPlayers",params:{}}),F=x.runContractFunction,y=(0,k.JX)({abi:m.abi,contractAddress:a,functionName:"getRecentWinner",params:{}}),G=y.runContractFunction;function H(){return I.apply(this,arguments)}function I(){return(I=q(l().mark(function a(){var b,c,d;return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E();case 2:return b=a.sent.toString(),a.next=5,F();case 5:return c=a.sent.toString(),a.next=8,G();case 8:d=a.sent,z(b),A(c),B(d);case 12:case"end":return a.stop()}},a)}))).apply(this,arguments)}(0,n.useEffect)(function(){t&&H()},[t]);var J=(s=q(l().mark(function a(b){return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.wait(1);case 2:K(b),H();case 4:case"end":return a.stop()}},a)})),function(a){return s.apply(this,arguments)}),K=function(){C({type:"info",message:"Transaction Complete!",title:"Transaction Notification",position:"topR",icon:"bell"})};return(0,f.jsxs)("div",{className:"p-5",children:[(0,f.jsx)("h1",{className:"py-4 px-4 font-blog text-3xl",children:" Welcome to the Decentralized Raffle "}),a?(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{className:"bg-blue-500 hover:bg-blue 700 text-white font-bold py-4 px-9 rounded ml-auto ",onClick:q(l().mark(function a(){return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D({onSuccess:J,onError:function(a){return console.log(a)}});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},a)})),disabled:p||r,children:p||r?(0,f.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):(0,f.jsx)("div",{children:" Enter Raffle"})}),(0,f.jsxs)("div",{children:["Entrance fee is: ",o.bM(g,"ether")," ETH"]}),(0,f.jsxs)("div",{children:[" Number of players are: ",u]}),(0,f.jsxs)("div",{children:[" Recent winner was: ",v]})]}):(0,f.jsx)("div",{children:"No Raffle Address Detected"})]})}function s(){var a=(0,k.Nr)();return a.isWeb3Enabled,a.chainId,(0,f.jsxs)("div",{className:h().container,children:[(0,f.jsxs)(g.default,{children:[(0,f.jsx)("title",{children:" Raffle"}),(0,f.jsx)("meta",{name:"description",content:"Decentralized Raffle"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsx)(j,{}),(0,f.jsx)(r,{})]})}},7160:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(a,c,b){a.exports=b(83121)},63021:function(a){"use strict";a.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"address","name":"vrfCoordinatorV2"},{"type":"uint256","name":"entranceFee"},{"type":"bytes32","name":"gasLane"},{"type":"uint64","name":"subscriptionId"},{"type":"uint32","name":"callbackGasLimit"},{"type":"uint256","name":"interval"}]},{"type":"error","name":"OnlyCoordinatorCanFulfill","inputs":[{"type":"address","name":"have"},{"type":"address","name":"want"}]},{"type":"error","name":"Raffle__NotEnoughETHEntered","inputs":[]},{"type":"error","name":"Raffle__NotOpen","inputs":[]},{"type":"error","name":"Raffle__TransferFailed","inputs":[]},{"type":"error","name":"Raffle__UpkeepNotNeeded","inputs":[{"type":"uint256","name":"currentBalance"},{"type":"uint256","name":"numPlayers"},{"type":"uint256","name":"raffleState"}]},{"type":"event","anonymous":false,"name":"RaffleEnter","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"event","anonymous":false,"name":"RequestedRaffleWinner","inputs":[{"type":"uint256","name":"requestId","indexed":true}]},{"type":"event","anonymous":false,"name":"WinnerPicked","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"function","name":"checkUpkeep","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[{"type":"bool","name":"upkeepNeeded"},{"type":"bytes"}]},{"type":"function","name":"enterRaffle","constant":false,"stateMutability":"payable","payable":true,"gas":29000000,"inputs":[],"outputs":[]},{"type":"function","name":"getEntranceFee","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getInterval","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getLatestTimeStamp","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumWords","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumberOfPlayers","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getPlayer","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"index"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRaffleState","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint8"}]},{"type":"function","name":"getRecentWinner","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getRequestConfirmations","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"performUpkeep","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[]},{"type":"function","name":"rawFulfillRandomWords","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"requestId"},{"type":"uint256[]","name":"randomWords"}],"outputs":[]}]')},37917:function(a){"use strict";a.exports=JSON.parse('{"4":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"],"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"]}')}},function(a){a.O(0,[774,888,179],function(){return a(a.s=78581)}),_N_E=a.O()}])