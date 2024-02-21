"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[700],{9316:(e,d,i)=>{i.r(d),i.d(d,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=i(7624),n=i(2172);const s={sidebar_position:2},t="Configura\xe7\xf5es do jogo",l={id:"getting-started/configuration/game-settings",title:"Configura\xe7\xf5es do jogo",description:"Modifica as configura\xe7\xf5es do jogo usando as vari\xe1veis de ambiente.",source:"@site/i18n/pt-PT/docusaurus-plugin-content-docs/current/getting-started/configuration/game-settings.md",sourceDirName:"getting-started/configuration",slug:"/getting-started/configuration/game-settings",permalink:"/pt-PT/getting-started/configuration/game-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/getting-started/configuration/game-settings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configura\xe7\xf5es do servidor",permalink:"/pt-PT/getting-started/configuration/server-settings"},next:{title:"Comandos Servidor (RCON)",permalink:"/pt-PT/getting-started/configuration/server-commands"}},o={},c=[{value:"Usando Vari\xe1veis do Ambiente",id:"usando-vari\xe1veis-do-ambiente",level:2},{value:"Manualmente",id:"manualmente",level:3}];function a(e){const d={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h1,{id:"configura\xe7\xf5es-do-jogo",children:"Configura\xe7\xf5es do jogo"}),"\n",(0,r.jsx)(d.p,{children:"Modifica as configura\xe7\xf5es do jogo usando as vari\xe1veis de ambiente."}),"\n",(0,r.jsx)(d.h2,{id:"usando-vari\xe1veis-do-ambiente",children:"Usando Vari\xe1veis do Ambiente"}),"\n",(0,r.jsxs)(d.admonition,{type:"warning",children:[(0,r.jsx)(d.p,{children:"As vari\xe1veis de ambiente est\xe3o sujeitas a altera\xe7\xf5es pois o jogo ainda est\xe1 em beta."}),(0,r.jsxs)(d.p,{children:["Verifica o link ",(0,r.jsx)(d.a,{href:"https://tech.palworldgame.com/optimize-game-balance",children:"p\xe1gina oficial dos par\xe2metros suportados"})]})]}),"\n",(0,r.jsx)(d.p,{children:"Converter configura\xe7\xf5es do jogo para vari\xe1veis de ambiente, segue o mesmo pr\xedncipio (com algumas excep\xe7\xf5es):"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:"todas as letras mai\xfasculas"}),"\n",(0,r.jsx)(d.li,{children:"dividir palavras inserindo com underscore (_)"}),"\n",(0,r.jsx)(d.li,{children:'remover a letra \xfanica se a configura\xe7\xe3o come\xe7ar por uma (por exemplo "b")'}),"\n"]}),"\n",(0,r.jsx)(d.p,{children:"Exemplos:"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:"Difficulty -> DIFFICULTY"}),"\n",(0,r.jsx)(d.li,{children:"PalSpawnNumRate -> PAL_SPAWN_NUM_RATE"}),"\n",(0,r.jsx)(d.li,{children:"bIsPvP -> IS_PVP"}),"\n"]}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Vari\xe1vel"}),(0,r.jsx)(d.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(d.th,{children:"Valor Predefinido"}),(0,r.jsx)(d.th,{children:"Valores Aceites"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"DIFFICULTY"}),(0,r.jsx)(d.td,{children:"Dificuldade do jogo"}),(0,r.jsx)(d.td,{children:"None"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"None"}),",",(0,r.jsx)(d.code,{children:"Normal"}),",",(0,r.jsx)(d.code,{children:"Difficult"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"DAYTIME_SPEEDRATE"}),(0,r.jsx)(d.td,{children:"Dura\xe7\xe3o do dia - Menor n\xfamero significa dia menor"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"NIGHTTIME_SPEEDRATE"}),(0,r.jsx)(d.td,{children:"Dura\xe7\xe3o da noite - Menor n\xfamero significa noite menor"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"EXP_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente ganho de EXP"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PAL_CAPTURE_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente captura do Pal"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PAL_SPAWN_NUM_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente aparecimento do Pal"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PAL_DAMAGE_RATE_ATTACK"}),(0,r.jsx)(d.td,{children:"Coeficiente ataque do Pal"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PAL_DAMAGE_RATE_DEFENSE"}),(0,r.jsx)(d.td,{children:"Coeficiente defesa do Pal"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PLAYER_DAMAGE_RATE_ATTACK"}),(0,r.jsx)(d.td,{children:"Coeficiente ataque do jogador"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PLAYER_DAMAGE_RATE_DEFENSE"}),(0,r.jsx)(d.td,{children:"Coeficiente defesa do jogador"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PLAYER_STOMACH_DECREASE_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente diminui\xe7\xe3o est\xf4mago do jogador"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PLAYER_STAMINA_DECREASE_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente diminui\xe7\xe3o energia do jogador"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PLAYER_AUTO_HP_REGEN_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente recupera\xe7\xe3o de vida do jogador"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PLAYER_AUTO_HP_REGEN_RATE_IN_SLEEP"}),(0,r.jsx)(d.td,{children:"Coeficiente recupera\xe7\xe3o de vida do jogador a dormir"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PAL_STOMACH_DECREASE_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente diminui\xe7\xe3o est\xf4mago do Pal"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PAL_STAMINA_DECREASE_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente diminui\xe7\xe3o energia do Pal"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PAL_AUTO_HP_REGEN_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente recupera\xe7\xe3o de vida do Pal"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PAL_AUTO_HP_REGEN_RATE_IN_SLEEP"}),(0,r.jsx)(d.td,{children:"Coeficiente recupera\xe7\xe3o de vida do Pal (na Palbox)"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"BUILD_OBJECT_DAMAGE_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente dano a estruturas"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"BUILD_OBJECT_DETERIORATION_DAMAGE_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente deteriora\xe7\xe3o de estruturas"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"COLLECTION_DROP_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente de drops dos objectos colecion\xe1veis"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"COLLECTION_OBJECT_HP_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente de vida dos objectos colecion\xe1veis"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"COLLECTION_OBJECT_RESPAWN_SPEED_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente de aparecimento de objectos colecion\xe1veis - Menor n\xfamero, regenera\xe7\xe3o mais r\xe1pida"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ENEMY_DROP_ITEM_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente de drops dos inimigos"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"DEATH_PENALTY"}),(0,r.jsx)(d.td,{children:"Pena de Morte None: Nenhuma pena de morte Item: Itens caem mas o equipamento fica ItemAndEquipment: Itens e equipamento caem All: Itens, equipamento e PAL caem"}),(0,r.jsx)(d.td,{children:"All"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"None"}),",",(0,r.jsx)(d.code,{children:"Item"}),",",(0,r.jsx)(d.code,{children:"ItemAndEquipment"}),",",(0,r.jsx)(d.code,{children:"All"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ENABLE_PLAYER_TO_PLAYER_DAMAGE"}),(0,r.jsx)(d.td,{children:"Permite os jogadores danificarem outros jogadores"}),(0,r.jsx)(d.td,{children:"False"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ENABLE_FRIENDLY_FIRE"}),(0,r.jsx)(d.td,{children:"Permite danificar aliados"}),(0,r.jsx)(d.td,{children:"False"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ENABLE_INVADER_ENEMY"}),(0,r.jsx)(d.td,{children:"Permite invasores"}),(0,r.jsx)(d.td,{children:"True"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ACTIVE_UNKO"}),(0,r.jsx)(d.td,{children:"Permite UNKO (?)"}),(0,r.jsx)(d.td,{children:"False"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ENABLE_AIM_ASSIST_PAD"}),(0,r.jsx)(d.td,{children:"Permite assist\xeancia \xe1 pontaria do comando"}),(0,r.jsx)(d.td,{children:"True"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ENABLE_AIM_ASSIST_KEYBOARD"}),(0,r.jsx)(d.td,{children:"Permite assist\xeancia \xe1 pontaria do teclado"}),(0,r.jsx)(d.td,{children:"False"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"DROP_ITEM_MAX_NUM"}),(0,r.jsx)(d.td,{children:"Maior n\xfamero de drops no mundo"}),(0,r.jsx)(d.td,{children:"3000"}),(0,r.jsx)(d.td,{children:"Integer"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"DROP_ITEM_MAX_NUM_UNKO"}),(0,r.jsx)(d.td,{children:"Maior n\xfamero de drops UNKO no mundo"}),(0,r.jsx)(d.td,{children:"100"}),(0,r.jsx)(d.td,{children:"Integer"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"BASE_CAMP_MAX_NUM"}),(0,r.jsx)(d.td,{children:"Maior n\xfamero de bases"}),(0,r.jsx)(d.td,{children:"128"}),(0,r.jsx)(d.td,{children:"Integer"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"BASE_CAMP_WORKER_MAX_NUM"}),(0,r.jsx)(d.td,{children:"Maior n\xfamero de trabalhadores"}),(0,r.jsx)(d.td,{children:"15"}),(0,r.jsx)(d.td,{children:"Integer"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"DROP_ITEM_ALIVE_MAX_HOURS"}),(0,r.jsx)(d.td,{children:"Tempo que demoram os drops a desaparecer em horas"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"AUTO_RESET_GUILD_NO_ONLINE_PLAYERS"}),(0,r.jsx)(d.td,{children:"Redefinir automaticamente a guild quando nenhum jogador estiver online"}),(0,r.jsx)(d.td,{children:"False"}),(0,r.jsx)(d.td,{children:"Bool"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"AUTO_RESET_GUILD_TIME_NO_ONLINE_PLAYERS"}),(0,r.jsx)(d.td,{children:"Tempo para redefinir automaticamente a guild quando nenhum jogador estiver online"}),(0,r.jsx)(d.td,{children:"72.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"GUILD_PLAYER_MAX_NUM"}),(0,r.jsx)(d.td,{children:"M\xe1ximos de jogadores na guild"}),(0,r.jsx)(d.td,{children:"20"}),(0,r.jsx)(d.td,{children:"Integer"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"PAL_EGG_DEFAULT_HATCHING_TIME"}),(0,r.jsx)(d.td,{children:"Tempo de incuba\xe7\xe3o dos ovos massivos em horas"}),(0,r.jsx)(d.td,{children:"72.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"WORK_SPEED_RATE"}),(0,r.jsx)(d.td,{children:"Coeficiente da velocidade de trabalho"}),(0,r.jsx)(d.td,{children:"1.000000"}),(0,r.jsx)(d.td,{children:"Float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"IS_MULTIPLAY"}),(0,r.jsx)(d.td,{children:"Permite multiplayer"}),(0,r.jsx)(d.td,{children:"False"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"IS_PVP"}),(0,r.jsx)(d.td,{children:"Permite PVP"}),(0,r.jsx)(d.td,{children:"False"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"CAN_PICKUP_OTHER_GUILD_DEATH_PENALTY_DROP"}),(0,r.jsx)(d.td,{children:"Permite jogadores de outras guilds levar os itens da pena de morte"}),(0,r.jsx)(d.td,{children:"False"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ENABLE_NON_LOGIN_PENALTY"}),(0,r.jsx)(d.td,{children:"Permite penaliza\xe7\xe3o por n\xe3o iniciar sess\xe3o"}),(0,r.jsx)(d.td,{children:"True"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ENABLE_FAST_TRAVEL"}),(0,r.jsx)(d.td,{children:"Permite viagens r\xe1pidas (fast travel)"}),(0,r.jsx)(d.td,{children:"True"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"IS_START_LOCATION_SELECT_BY_MAP"}),(0,r.jsx)(d.td,{children:"Permite selecionar local de in\xedcio"}),(0,r.jsx)(d.td,{children:"True"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"EXIST_PLAYER_AFTER_LOGOUT"}),(0,r.jsx)(d.td,{children:"Elimina jogadores que se desconectam"}),(0,r.jsx)(d.td,{children:"False"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ENABLE_DEFENSE_OTHER_GUILD_PLAYER"}),(0,r.jsx)(d.td,{children:"Permite defender contra jogadores de outras guilds"}),(0,r.jsx)(d.td,{children:"False"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"COOP_PLAYER_MAX_NUM"}),(0,r.jsx)(d.td,{children:"N\xfamero m\xe1ximo de jogadores numa guild"}),(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:"Integer"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"REGION"}),(0,r.jsx)(d.td,{children:"Regi\xe3o"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"String"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"USEAUTH"}),(0,r.jsx)(d.td,{children:"Utilizar a autentica\xe7\xe3o"}),(0,r.jsx)(d.td,{children:"True"}),(0,r.jsx)(d.td,{children:"Boolean"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"BAN_LIST_URL"}),(0,r.jsx)(d.td,{children:"Lista de bans a utilizar"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"https://api.palworldgame.com/api/banlist.txt",children:"https://api.palworldgame.com/api/banlist.txt"})}),(0,r.jsx)(d.td,{children:"string"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"TARGET_MANIFEST_ID"}),(0,r.jsx)(d.td,{children:"Muda a vers\xe3o do jogo para a correspondente to manifest ID do Steam Download Depot."}),(0,r.jsx)(d.td,{}),(0,r.jsxs)(d.td,{children:["Consultar ",(0,r.jsx)(d.a,{href:"/pt-PT/guides/pinning-game-version",children:"Manifest ID Table"})]})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"manualmente",children:"Manualmente"}),"\n",(0,r.jsxs)(d.p,{children:["Quando o servidor \xe9 iniciado, o ficheiro ",(0,r.jsx)(d.code,{children:"PalWorldSettings.ini"})," ser\xe1 criado na seguinte diretoria: ",(0,r.jsx)(d.code,{children:"<mount_folder>/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini"})]}),"\n",(0,r.jsxs)(d.p,{children:["Tenha em considera\xe7\xe3o que as vari\xe1veis ENV v\xe3o se sobrepor \xe1s altera\xe7\xf5es manuais no ficheiro ",(0,r.jsx)(d.code,{children:"PalWorldSettings.ini"}),"."]}),"\n",(0,r.jsxs)(d.admonition,{type:"warning",children:[(0,r.jsxs)(d.p,{children:["S\xf3 se pode alterar o ficheiro ",(0,r.jsx)(d.code,{children:"PalWorldSettings.ini"})," quando o servidor est\xe1 desligado."]}),(0,r.jsx)(d.p,{children:"As altera\xe7\xf5es efectuadas enquanto o servidor est\xe1 ativo ser\xe3o substitu\xeddas quando o servidor parar."})]}),"\n",(0,r.jsxs)(d.p,{children:["Para uma lista mais detalhada das configura\xe7\xf5es do jogo: ",(0,r.jsx)(d.a,{href:"https://palworld.wiki.gg/wiki/PalWorldSettings.ini",children:"Palworld Wiki"})]}),"\n",(0,r.jsxs)(d.p,{children:["Para uma explica\xe7\xe3o mais detalhada das configura\xe7\xf5es do jogo: ",(0,r.jsx)(d.a,{href:"https://shockbyte.com/billing/knowledgebase/1189/How-to-Configure-your-Palworld-server.html",children:"shockbyte"})]})]})}function h(e={}){const{wrapper:d}={...(0,n.M)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2172:(e,d,i)=>{i.d(d,{I:()=>l,M:()=>t});var r=i(1504);const n={},s=r.createContext(n);function t(e){const d=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(s.Provider,{value:d},e.children)}}}]);