import styled, {keyframes} from "styled-components";
const map="/catalonia-accurate.svg";

const pulse=keyframes`0%{transform:translate(-50%,-50%) scale(.65);opacity:.65}100%{transform:translate(-50%,-50%) scale(2.5);opacity:0}`;
const Wrap=styled.div`position:relative;width:100%;aspect-ratio:1.11/1;background:transparent`;
const Map=styled.img`position:absolute;inset:0;width:100%;height:100%;object-fit:contain;filter:saturate(.75)`;
const Point=styled.div`
  position:absolute;left:${p=>p.$x}%;top:${p=>p.$y}%;width:9px;height:9px;background:${p=>p.$main?"#b87958":"#42634a"};
  transform:translate(-50%,-50%);z-index:2;
  &:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;border:1px solid ${p=>p.$main?"#b87958":"#42634a"};animation:${pulse} 2.8s ease-out infinite}
`;
const Label=styled.span`
  position:absolute;left:18px;top:-6px;white-space:nowrap;font:600 12px "Inter Tight",sans-serif;color:#18231c;
  letter-spacing:.025em;background:rgba(243,240,232,.78);backdrop-filter:blur(6px);padding:3px 5px;
  @media(max-width:480px){font-size:10px;left:13px}
`;
const places=[
  {name:"Lleida",x:25.6,y:53},
  {name:"Girona",x:73.7,y:39},
  {name:"Granollers",x:62.1,y:53.4},
  {name:"Barcelona",x:59.5,y:62.3,main:true},
  {name:"Tarragona",x:39.4,y:72.3}
];
export default function CatalunyaMap(){return <Wrap role="img" aria-label="Mapa geográfico de cobertura en Cataluña"><Map src={map} alt="Contorno geográfico de Cataluña"/>{places.map(p=><Point key={p.name} $x={p.x} $y={p.y} $main={p.main}><Label>{p.name}</Label></Point>)}</Wrap>}
