(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1196],{3321:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-reference/server/transfer-token-v2",function(){return r(426)}])},426:function(e,t,r){"use strict";r.r(t),r.d(t,{__toc:function(){return l}});var n=r(5893),s=r(2673),a=r(2169),o=r(2069);r(9488);var i=r(2643),d=r(6514);let l=[{depth:2,value:"Headers",id:"headers"},{depth:2,value:"Parameters",id:"parameters"},{depth:2,value:"Code",id:"code"},{depth:2,value:"Response",id:"response"}];function c(e){let t=Object.assign({p:"p",h2:"h2",code:"code",hr:"hr",pre:"pre",span:"span"},(0,i.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Used to transfer ERC20/Native Tokens from user wallet address to recipient address. The order ID will be returned in the response. The bulk order ID can be used to track the status of the order."}),"\n",(0,n.jsxs)(d.X,{children:[(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"headers",children:"Headers"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"x-api-key"})," : string ",(0,n.jsx)("br",{}),"\nThe S2S API Key provided by Okto."]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"operation_type"})," : string ",(0,n.jsx)("br",{}),"\nType of operation to be performed."]}),(0,n.jsx)(t.hr,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"network_name"})," : string ",(0,n.jsx)("br",{}),"\nName of the network to perform tranfer on."]}),(0,n.jsx)(t.hr,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"token_address"})," : string ",(0,n.jsx)("br",{}),"\nAddress of the token to be transferred."]}),(0,n.jsx)(t.hr,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"quantity"})," : string ",(0,n.jsx)("br",{}),"\nQuantity of tokens to be transferred."]}),(0,n.jsx)(t.hr,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"recipient_address"})," : string ",(0,n.jsx)("br",{}),"\nAddress of the recipient address to send tokens to."]}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"code",children:"Code"}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(t.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"curl"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-X"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"POST"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'${baseUrl}/s2s/api/v2/transfer/tokens/execute/:userId'"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"-H"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'accept: application/json'"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"-H"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'x-api-key: API_KEY'"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-d"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'"})]}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"    {"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'        "network_name": "APTOS TESTNET",'})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'        "token_address": "0x2f7b97837f2d14ba2ed3a4b2282e259126a9b848",'})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'        "quantity": "0.0001",'})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'        "recipient_address": "0x8ff71ae16c88d86f5ec4100951f37a50683e8cd23ca515894854fcfc4ab7399b"'})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"    }"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'"})})]})}),(0,n.jsx)(t.h2,{id:"response",children:"Response"}),(0,n.jsx)(t.pre,{"data-language":"json","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"json","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"status"'}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"success"'}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"data"'}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"bulk_order_id"'}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"dd784ad9-68f8-49b9-87dc-13723e933eab"'})]}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),(0,n.jsx)(t.p,{children:"The developer should use the bulk-order-details APIs for checking the order status"})]})]})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/api-reference/server/transfer-token-v2.mdx",route:"/api-reference/server/transfer-token-v2",timestamp:1723111763e3,pageMap:[{kind:"Meta",data:{index:{title:"Overview"},"getting-started":"Get Okto API Key and Setup","oauth-steps":{title:"Steps to get OAuth 2.0 Token Id",display:"hidden"},guide:"Guide","sdk-reference":"SDK Reference","api-reference":"API Reference",contact:{title:"Support ↗",type:"page",href:"https://okto.tech/help",newWindow:!0},"contact-us-&-feedback":"Contact Us & Feedback",about:"About"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"api-reference",route:"/api-reference",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"Folder",name:"client",route:"/api-reference/client",children:[{kind:"Meta",data:{authenticate:"Authenticate","set-pin":"Set PIN","create-wallet":"Create Wallet","refresh-token":"Refresh Token",logout:"Logout","user-details":"User Details","get-wallet":"Get Wallets","supported-networks":"Supported Networks","supported-tokens":"Supported Tokens","user-portfolio":"User Portfolio","user-activity":"User Portfolio Activity","transfer-tokens":"Transfer Tokens","orders-history":"Orders History","transfer-nft":"Transfer NFT","order-details-nft":"Order Details NFT","raw-transaction-execute":"Raw Transaction Execute","raw-transaction-status":"Raw Transaction Status"}},{kind:"MdxPage",name:"authenticate",route:"/api-reference/client/authenticate"},{kind:"MdxPage",name:"create-wallet",route:"/api-reference/client/create-wallet"},{kind:"MdxPage",name:"get-wallet",route:"/api-reference/client/get-wallet"},{kind:"MdxPage",name:"logout",route:"/api-reference/client/logout"},{kind:"MdxPage",name:"order-details-nft",route:"/api-reference/client/order-details-nft"},{kind:"MdxPage",name:"orders-history",route:"/api-reference/client/orders-history"},{kind:"MdxPage",name:"raw-transaction-execute",route:"/api-reference/client/raw-transaction-execute"},{kind:"MdxPage",name:"raw-transaction-status",route:"/api-reference/client/raw-transaction-status"},{kind:"MdxPage",name:"refresh-token",route:"/api-reference/client/refresh-token"},{kind:"MdxPage",name:"set-pin",route:"/api-reference/client/set-pin"},{kind:"MdxPage",name:"supported-networks",route:"/api-reference/client/supported-networks"},{kind:"MdxPage",name:"supported-tokens",route:"/api-reference/client/supported-tokens"},{kind:"MdxPage",name:"transfer-nft",route:"/api-reference/client/transfer-nft"},{kind:"MdxPage",name:"transfer-tokens",route:"/api-reference/client/transfer-tokens"},{kind:"MdxPage",name:"user-activity",route:"/api-reference/client/user-activity"},{kind:"MdxPage",name:"user-details",route:"/api-reference/client/user-details"},{kind:"MdxPage",name:"user-portfolio",route:"/api-reference/client/user-portfolio"}]},{kind:"Folder",name:"server",route:"/api-reference/server",children:[{kind:"Meta",data:{"mint-nft-v2":"Mint NFT V2","transfer-nft-v2":"Transfer NFT V2","transfer-token-v2":"Transfer Tokens V2","bulk-order-details":"Bulk Order Details","user-wallet":"User Wallet","user-portfolio":"User Portfolio","user-nft":"User NFT","user-activity":"User Activity","supported-tokens":"Supported Tokens","mint-nft":"Mint NFT","transfer-nft":"Transfer NFT","order-details-nft":"Order Details NFT"}},{kind:"MdxPage",name:"bulk-order-details",route:"/api-reference/server/bulk-order-details"},{kind:"MdxPage",name:"mint-nft-v2",route:"/api-reference/server/mint-nft-v2"},{kind:"MdxPage",name:"mint-nft",route:"/api-reference/server/mint-nft"},{kind:"MdxPage",name:"order-details-nft",route:"/api-reference/server/order-details-nft"},{kind:"MdxPage",name:"supported-tokens",route:"/api-reference/server/supported-tokens"},{kind:"MdxPage",name:"transfer-nft-v2",route:"/api-reference/server/transfer-nft-v2"},{kind:"MdxPage",name:"transfer-nft",route:"/api-reference/server/transfer-nft"},{kind:"MdxPage",name:"transfer-token-v2",route:"/api-reference/server/transfer-token-v2"},{kind:"MdxPage",name:"user-activity",route:"/api-reference/server/user-activity"},{kind:"MdxPage",name:"user-nft",route:"/api-reference/server/user-nft"},{kind:"MdxPage",name:"user-portfolio",route:"/api-reference/server/user-portfolio"},{kind:"MdxPage",name:"user-wallet",route:"/api-reference/server/user-wallet"}]}]},{kind:"MdxPage",name:"contact-us-&-feedback",route:"/contact-us-&-feedback"},{kind:"MdxPage",name:"getting-started",route:"/getting-started"},{kind:"Folder",name:"guide",route:"/guide",children:[{kind:"Meta",data:{"app-setup":"App Setup","google-authentication-setup":"Google Authentication Setup",authenticate:"Authenticate","get-details":"Get Details","transfer-assets":"Transfer Assets","raw-transactions":"Raw Transactions","mint-nft":"Mint NFT (S2S Only)","okto-widgets":"Okto Widgets",logout:"Logout"}},{kind:"MdxPage",name:"app-setup",route:"/guide/app-setup"},{kind:"Folder",name:"authenticate",route:"/guide/authenticate",children:[{kind:"Meta",data:{authenticate:"Authenticate","create-wallet":"Create Wallet"}},{kind:"MdxPage",name:"authenticate",route:"/guide/authenticate/authenticate"},{kind:"MdxPage",name:"create-wallet",route:"/guide/authenticate/create-wallet"}]},{kind:"Folder",name:"get-details",route:"/guide/get-details",children:[{kind:"Meta",data:{"fetch-user":"Fetch User","fetch-wallets":"Fetch Wallets","fetch-portfolio":"Fetch Portfolio","supported-networks-and-tokens":"Fetch Supported Chains"}},{kind:"MdxPage",name:"fetch-portfolio",route:"/guide/get-details/fetch-portfolio"},{kind:"MdxPage",name:"fetch-user",route:"/guide/get-details/fetch-user"},{kind:"MdxPage",name:"fetch-wallets",route:"/guide/get-details/fetch-wallets"},{kind:"MdxPage",name:"supported-networks-and-tokens",route:"/guide/get-details/supported-networks-and-tokens"}]},{kind:"MdxPage",name:"google-authentication-setup",route:"/guide/google-authentication-setup"},{kind:"MdxPage",name:"logout",route:"/guide/logout"},{kind:"MdxPage",name:"mint-nft",route:"/guide/mint-nft"},{kind:"Folder",name:"okto-widgets",route:"/guide/okto-widgets",children:[{kind:"Meta",data:{"open-okto-bottomsheet":"Open Okto Widget","customize-okto":"Customize Okto Widget"}},{kind:"MdxPage",name:"customize-okto",route:"/guide/okto-widgets/customize-okto"},{kind:"MdxPage",name:"open-okto-bottomsheet",route:"/guide/okto-widgets/open-okto-bottomsheet"}]},{kind:"Folder",name:"raw-transactions",route:"/guide/raw-transactions",children:[{kind:"Meta",data:{execute:"Execute Transaction",status:"Transaction Status"}},{kind:"MdxPage",name:"execute",route:"/guide/raw-transactions/execute"},{kind:"MdxPage",name:"status",route:"/guide/raw-transactions/status"}]},{kind:"Folder",name:"transfer-assets",route:"/guide/transfer-assets",children:[{kind:"Meta",data:{"transfer-tokens":"Transfer Tokens","order-details":"Order Details","transfer-nft":"Transfer NFT","nft-order-details":"NFT Order Details"}},{kind:"MdxPage",name:"nft-order-details",route:"/guide/transfer-assets/nft-order-details"},{kind:"MdxPage",name:"order-details",route:"/guide/transfer-assets/order-details"},{kind:"MdxPage",name:"transfer-nft",route:"/guide/transfer-assets/transfer-nft"},{kind:"MdxPage",name:"transfer-tokens",route:"/guide/transfer-assets/transfer-tokens"}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"oauth-steps",route:"/oauth-steps"},{kind:"Folder",name:"sdk-reference",route:"/sdk-reference",children:[{kind:"Folder",name:"flutter",route:"/sdk-reference/flutter",children:[{kind:"Meta",data:{authenticate:"authenticate",getUserDetails:"getUserDetails",getWallets:"getWallets",getPortfolio:"getPortfolio",getSupportedNetworks:"getSupportedNetworks",getSupportedTokens:"getSupportedTokens",transferTokens:"transferTokens",orderHistory:"orderHistory",transferNFT:"transferNFT",getNftOrderDetails:"getNftOrderDetails",logout:"logout",showWidgetSheet:"showWidgetSheet"}},{kind:"MdxPage",name:"authenticate",route:"/sdk-reference/flutter/authenticate"},{kind:"MdxPage",name:"getNftOrderDetails",route:"/sdk-reference/flutter/getNftOrderDetails"},{kind:"MdxPage",name:"getPortfolio",route:"/sdk-reference/flutter/getPortfolio"},{kind:"MdxPage",name:"getSupportedNetworks",route:"/sdk-reference/flutter/getSupportedNetworks"},{kind:"MdxPage",name:"getSupportedTokens",route:"/sdk-reference/flutter/getSupportedTokens"},{kind:"MdxPage",name:"getUserDetails",route:"/sdk-reference/flutter/getUserDetails"},{kind:"MdxPage",name:"getWallets",route:"/sdk-reference/flutter/getWallets"},{kind:"MdxPage",name:"logout",route:"/sdk-reference/flutter/logout"},{kind:"MdxPage",name:"orderHistory",route:"/sdk-reference/flutter/orderHistory"},{kind:"MdxPage",name:"showWidgetSheet",route:"/sdk-reference/flutter/showWidgetSheet"},{kind:"MdxPage",name:"transferNFT",route:"/sdk-reference/flutter/transferNFT"},{kind:"MdxPage",name:"transferTokens",route:"/sdk-reference/flutter/transferTokens"}]},{kind:"Folder",name:"react",route:"/sdk-reference/react",children:[{kind:"Meta",data:{overview:"overview",authenticate:"authenticate",getUserDetails:"getUserDetails",getWallets:"getWallets",getPortfolio:"getPortfolio",getSupportedNetworks:"getSupportedNetworks",getSupportedTokens:"getSupportedTokens",getNftOrderDetails:"getNftOrderDetails",transferTokens:"transferTokens",orderHistory:"orderHistory",transferNFT:"transferNFT",logout:"logout",showWidgetModal:"showWidgetModal",setTheme:"setTheme"}},{kind:"MdxPage",name:"authenticate",route:"/sdk-reference/react/authenticate"},{kind:"MdxPage",name:"getNftOrderDetails",route:"/sdk-reference/react/getNftOrderDetails"},{kind:"MdxPage",name:"getPortfolio",route:"/sdk-reference/react/getPortfolio"},{kind:"MdxPage",name:"getSupportedNetworks",route:"/sdk-reference/react/getSupportedNetworks"},{kind:"MdxPage",name:"getSupportedTokens",route:"/sdk-reference/react/getSupportedTokens"},{kind:"MdxPage",name:"getUserDetails",route:"/sdk-reference/react/getUserDetails"},{kind:"MdxPage",name:"getWallets",route:"/sdk-reference/react/getWallets"},{kind:"MdxPage",name:"logout",route:"/sdk-reference/react/logout"},{kind:"MdxPage",name:"orderHistory",route:"/sdk-reference/react/orderHistory"},{kind:"MdxPage",name:"overview",route:"/sdk-reference/react/overview"},{kind:"MdxPage",name:"setTheme",route:"/sdk-reference/react/setTheme"},{kind:"MdxPage",name:"showWidgetModal",route:"/sdk-reference/react/showWidgetModal"},{kind:"MdxPage",name:"transferNFT",route:"/sdk-reference/react/transferNFT"},{kind:"MdxPage",name:"transferTokens",route:"/sdk-reference/react/transferTokens"}]},{kind:"Folder",name:"react-native",route:"/sdk-reference/react-native",children:[{kind:"Meta",data:{setTheme:"setTheme",authenticate:"authenticate",getUserDetails:"getUserDetails",getWallets:"getWallets",getPortfolio:"getPortfolio",getSupportedNetworks:"getSupportedNetworks",getSupportedTokens:"getSupportedTokens",transferTokens:"transferTokens",orderHistory:"orderHistory",transferNFT:"transferNFT",getNftOrderDetails:"getNftOrderDetails",logout:"logout",showWidgetSheet:"showWidgetSheet"}},{kind:"MdxPage",name:"authenticate",route:"/sdk-reference/react-native/authenticate"},{kind:"MdxPage",name:"getNftOrderDetails",route:"/sdk-reference/react-native/getNftOrderDetails"},{kind:"MdxPage",name:"getPortfolio",route:"/sdk-reference/react-native/getPortfolio"},{kind:"MdxPage",name:"getSupportedNetworks",route:"/sdk-reference/react-native/getSupportedNetworks"},{kind:"MdxPage",name:"getSupportedTokens",route:"/sdk-reference/react-native/getSupportedTokens"},{kind:"MdxPage",name:"getUserDetails",route:"/sdk-reference/react-native/getUserDetails"},{kind:"MdxPage",name:"getWallets",route:"/sdk-reference/react-native/getWallets"},{kind:"MdxPage",name:"logout",route:"/sdk-reference/react-native/logout"},{kind:"MdxPage",name:"orderHistory",route:"/sdk-reference/react-native/orderHistory"},{kind:"MdxPage",name:"setTheme",route:"/sdk-reference/react-native/setTheme"},{kind:"MdxPage",name:"showWidgetSheet",route:"/sdk-reference/react-native/showWidgetSheet"},{kind:"MdxPage",name:"transferNFT",route:"/sdk-reference/react-native/transferNFT"},{kind:"MdxPage",name:"transferTokens",route:"/sdk-reference/react-native/transferTokens"}]}]}],flexsearch:{codeblocks:!0},title:"Transfer Token V2",headings:l},pageNextRoute:"/api-reference/server/transfer-token-v2",nextraLayout:a.ZP,themeConfig:o.Z};t.default=(0,s.j)(u)},6514:function(e,t,r){"use strict";r.d(t,{X:function(){return s}});var n=r(5893);let s=e=>{let{children:t}=e;return(0,n.jsxs)("div",{style:{display:"flex",overflowX:"auto"},children:[(0,n.jsx)("div",{style:{flex:.5,minWidth:0,padding:"1em"},children:t[0]}),(0,n.jsx)("div",{style:{flex:1,minWidth:0,padding:"1em",overflowY:"auto",scrollbarWidth:"thin",scrollbarColor:"#555555 #00000030"},children:t[1]})]})}},2069:function(e,t,r){"use strict";var n=r(5893);r(7294);let s={logo:(0,n.jsxs)("svg",{height:"40",viewBox:"0 0 239 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsxs)("g",{"clip-path":"url(#clip0_1120_17422)",children:[(0,n.jsx)("path",{d:"M82.1943 50.2387C82.1943 72.8823 63.8381 91.2387 41.1944 91.2387C18.5508 91.2387 0.194467 72.8823 0.194458 50.2387C0.194449 27.5951 18.5508 9.23878 41.1944 9.23877C63.838 9.23876 82.1943 27.5951 82.1943 50.2387Z",fill:"url(#paint0_linear_1120_17422)"}),(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M41.1944 28.0989C28.9669 28.0989 19.0544 38.0113 19.0544 50.2389C19.0544 51.4389 19.1499 52.6166 19.3337 53.7649C19.4552 54.5488 19.9132 56.2487 20.7734 56.7772C21.8469 57.4369 23.0621 56.8698 24.0568 56.4056L24.0615 56.4034C24.858 56.0317 27.1963 54.9417 28.2659 54.4432C28.5107 54.3213 29.1577 54.1579 29.7868 54.4799C30.573 54.8824 30.8039 55.7093 30.7571 56.2023C30.7103 56.6953 30.4451 57.3462 29.7752 57.6567C29.2393 57.905 26.0853 59.375 24.5753 60.0789C24.2512 60.2042 23.5337 60.6737 23.2559 61.5494C22.9087 62.6442 23.4501 63.489 23.6397 63.7318C23.7814 63.9248 24.2036 64.3557 24.7591 64.5354C25.4535 64.7601 26.0499 64.6743 26.5156 64.4619C26.8881 64.292 34.2784 60.8452 37.9271 59.1431C38.1661 59.0245 38.801 58.8697 39.4281 59.1991C40.2119 59.6108 40.4375 60.3867 40.3979 60.8657C40.3584 61.3447 40.0931 62.0493 39.4399 62.3542C38.9174 62.598 34.0635 64.8581 31.7019 65.9577C31.2855 66.1462 30.4404 66.81 30.391 67.9575C30.3293 69.3918 31.3213 70.0716 31.7366 70.2628C32.0643 70.4317 32.9265 70.6739 33.7531 70.2914C34.5798 69.9089 43.3643 65.8119 47.6532 63.8112C47.9076 63.6799 48.5989 63.5105 49.1882 63.8112C49.96 64.205 50.2163 64.8771 50.2163 65.3855C50.2163 65.8939 50.1933 66.2667 49.3891 66.9872C48.6855 67.6174 47.6532 68.2375 44.1357 69.7366C42.9309 70.25 42.11 70.6279 42.245 71.2761C42.3465 71.7632 42.7011 71.9486 43.8791 71.8953C45.057 71.8419 50.3613 71.4257 55.6751 66.9872C60.3664 62.9275 63.3344 56.9298 63.3344 50.2389C63.3344 47.7733 62.9314 45.4019 62.1877 43.187C61.9349 43.2926 61.6575 43.3509 61.3664 43.3509C60.189 43.3509 59.2344 42.3963 59.2344 41.2189C59.2344 40.3713 59.729 39.6393 60.4453 39.2956C56.6355 32.6081 49.4416 28.0989 41.1944 28.0989ZM49.3944 42.0389C49.3944 43.2163 48.4399 44.1709 47.2624 44.1709C46.085 44.1709 45.1304 43.2163 45.1304 42.0389C45.1304 40.8614 46.085 39.9069 47.2624 39.9069C48.4399 39.9069 49.3944 40.8614 49.3944 42.0389Z",fill:"white"})]}),(0,n.jsx)("path",{d:"M114.867 73.8388C111.4 73.8388 108.267 73.061 105.467 71.5054C102.667 69.9054 100.467 67.6832 98.8666 64.8388C97.2666 61.9499 96.4666 58.6165 96.4666 54.8388C96.4666 51.1054 97.2888 47.7943 98.9332 44.9054C100.578 42.0166 102.822 39.7943 105.667 38.2388C108.511 36.6832 111.689 35.9054 115.2 35.9054C118.711 35.9054 121.889 36.6832 124.733 38.2388C127.578 39.7943 129.822 42.0166 131.467 44.9054C133.111 47.7943 133.933 51.1054 133.933 54.8388C133.933 58.5721 133.089 61.8832 131.4 64.7721C129.711 67.661 127.4 69.9054 124.467 71.5054C121.578 73.061 118.378 73.8388 114.867 73.8388ZM114.867 67.2388C116.822 67.2388 118.644 66.7721 120.333 65.8388C122.067 64.9054 123.467 63.5054 124.533 61.6388C125.6 59.7721 126.133 57.5054 126.133 54.8388C126.133 52.1721 125.622 49.9277 124.6 48.1054C123.578 46.2388 122.222 44.8388 120.533 43.9054C118.844 42.9721 117.022 42.5054 115.067 42.5054C113.111 42.5054 111.289 42.9721 109.6 43.9054C107.955 44.8388 106.644 46.2388 105.667 48.1054C104.689 49.9277 104.2 52.1721 104.2 54.8388C104.2 58.7943 105.2 61.861 107.2 64.0388C109.244 66.1721 111.8 67.2388 114.867 67.2388ZM155.313 54.9054L172.246 73.2388H161.98L148.38 57.4388V73.2388H140.78V23.9054H148.38V52.5721L161.713 36.5054H172.246L155.313 54.9054ZM185.894 42.7054V63.0388C185.894 64.4165 186.205 65.4165 186.827 66.0388C187.494 66.6165 188.605 66.9054 190.16 66.9054H194.827V73.2388H188.827C185.405 73.2388 182.783 72.4388 180.96 70.8388C179.138 69.2388 178.227 66.6388 178.227 63.0388V42.7054H173.894V36.5054H178.227V27.3721H185.894V36.5054H194.827V42.7054H185.894ZM217.098 73.8388C213.632 73.8388 210.498 73.061 207.698 71.5054C204.898 69.9054 202.698 67.6832 201.098 64.8388C199.498 61.9499 198.698 58.6165 198.698 54.8388C198.698 51.1054 199.521 47.7943 201.165 44.9054C202.809 42.0166 205.054 39.7943 207.898 38.2388C210.743 36.6832 213.921 35.9054 217.432 35.9054C220.943 35.9054 224.121 36.6832 226.965 38.2388C229.809 39.7943 232.054 42.0166 233.698 44.9054C235.343 47.7943 236.165 51.1054 236.165 54.8388C236.165 58.5721 235.321 61.8832 233.632 64.7721C231.943 67.661 229.632 69.9054 226.698 71.5054C223.809 73.061 220.609 73.8388 217.098 73.8388ZM217.098 67.2388C219.054 67.2388 220.876 66.7721 222.565 65.8388C224.298 64.9054 225.698 63.5054 226.765 61.6388C227.832 59.7721 228.365 57.5054 228.365 54.8388C228.365 52.1721 227.854 49.9277 226.832 48.1054C225.809 46.2388 224.454 44.8388 222.765 43.9054C221.076 42.9721 219.254 42.5054 217.298 42.5054C215.343 42.5054 213.521 42.9721 211.832 43.9054C210.187 44.8388 208.876 46.2388 207.898 48.1054C206.921 49.9277 206.432 52.1721 206.432 54.8388C206.432 58.7943 207.432 61.861 209.432 64.0388C211.476 66.1721 214.032 67.2388 217.098 67.2388Z",fill:"currentColor"}),(0,n.jsxs)("defs",{children:[(0,n.jsxs)("linearGradient",{id:"paint0_linear_1120_17422",x1:"41.1944",y1:"9.23877",x2:"41.1944",y2:"91.2387",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{"stop-color":"#6246F5"}),(0,n.jsx)("stop",{offset:"0.493007","stop-color":"#5166EE"}),(0,n.jsx)("stop",{offset:"1","stop-color":"#56B9F9"})]}),(0,n.jsx)("clipPath",{id:"clip0_1120_17422",children:(0,n.jsx)("rect",{width:"82",height:"82",fill:"white",transform:"translate(0.194458 9.23877)"})})]})]}),head:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("link",{rel:"icon",sizes:"any",href:"/favicon.ico"})}),project:{},chat:{},docsRepositoryBase:"https://github.com/shuding/nextra-docs-template",footer:{text:"\xa9 ".concat(new Date().getFullYear(),". All rights reserved.")},useNextSeoProps:()=>({titleTemplate:"%s – Okto Docs"}),nextThemes:{defaultTheme:"system"}};t.Z=s},5789:function(){}},function(e){e.O(0,[7942,2888,9774,179],function(){return e(e.s=3321)}),_N_E=e.O()}]);