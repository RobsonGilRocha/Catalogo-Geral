import React,{useEffect, useState } from 'react'
import { getDragons, createDragons, deleteDragons, putDragons} from '../../services/dragon' 
import { CatalogoBox, CatalogoTitle, CatalogoSubTitle, Catalogobutton,
   DragaoBox, GridBox, Catalogolabel,Catalogoinput,DEVbutton,
    NavTopBox,NavBotBox,Row, Separator,Line } from './styled';

function List({setLoginefetuado,setLogindev,logindev}) {
  const [dragons, setDragons] = useState()
  const [isclicked, setClicked] = useState(false)
  const [optionbar, setOptionbar] = useState(0)
  const [count, setCount] =useState(0)
  const [loadlist, setLoadlist] =useState(false)
  const [Catalogoinputname, setCatalogoinputname] = useState();
  const [Catalogoinputtype, setCatalogoinputtype] = useState();
  const [Catalogoinputhistories, setCatalogoinputhistories] = useState();
  const [Catalogoinputdeleteid, setCatalogoinputdeleteid] = useState();
  const [Catalogoinputnameput, setCatalogoinputnameput] = useState();
  const [Catalogoinputtypeput, setCatalogoinputtypeput] = useState();
  const [Catalogoinputhistoriesput, setCatalogoinputhistoriesput] = useState();
  const [Catalogoinputputid, setCatalogoinputputid] = useState();

  
  useEffect(()=>{
    async function FetchDragons(){
      setLoadlist(true)
       const response = await getDragons()
       setDragons(response.data)
       setCount(response.data.length)
       setLoadlist(false)
    }
    FetchDragons()
  },[isclicked])
 
 function criarOption(){
  optionbar === 1? setOptionbar(0): setOptionbar(1)
 /*  alert("criarOption, optionbar mudou para 1 boleano 0") */
}
async function handleCreateDragon(){
  await createDragons({
    name:`${Catalogoinputname}`,
    type:`${Catalogoinputtype}`,
    histories:`${Catalogoinputhistories}`
  })
}

function delOption(){
  optionbar === 2? setOptionbar(0): setOptionbar(2)
 /*  alert("delOption, optionbar mudou para 2 boleano 0") */
}
function deleteID(){
  deleteDragons(Catalogoinputdeleteid)
}

function putOption(){
  optionbar === 3? setOptionbar(0): setOptionbar(3)
 /*  alert("putOption, optionbar mudou para 3 boleano 0") */
}
function updateID(){
  putDragons(Catalogoinputputid,{
    name:Catalogoinputnameput,
    type:Catalogoinputtypeput,
    histories:Catalogoinputhistoriesput
  })
} 

function devOption(){
  optionbar === 4? setOptionbar(0): setOptionbar(4)
/*   alert("devOption, optionbar mudou para 0 boleano 4") */
}
function deleteALLBEST(){
  dragons?.forEach( (dragon) => {
    setTimeout(() => {
      deleteDragons(dragon.id);
    }, 2000);
  }, alert("cudado aperte novamente"))
}


 function topOn() {
   /* const [toggle, setToggle] = useState(false)
    setToggle( window.pageYOffset > 300 ? true : false)
 */
/* { toggle 
            ?
            <NavTopBox onClick={()=>topOn()}/>
            : 
            <NavTopBox onClick={()=>topOn()}/>
            }
         */

  window.scroll({
      top: 0,
      behavior: 'smooth'

  })
}
function botOn() {
  /* const [toggle, setToggle] = useState(false)
   setToggle( window.pageYOffset > 300 ? true : false)
*/
/* { toggle 
           ?
           <NavTopBox onClick={()=>topOn()}/>
           : 
           <NavTopBox onClick={()=>topOn()}/>
           }
        */

 window.scroll({
     top: 10000,
     behavior: 'smooth'

 })
}
/* ,alert(` Foi registrado ${Catalogoinputname}`), 
  setOptionbar(0) */

  

  function refresh() {
    setClicked(!isclicked)
  }
    
      
 
let optBarPst =[
<CatalogoTitle>Cat??logo de Drag??es</CatalogoTitle>
,
<DragaoBox><CatalogoSubTitle>Registre:</CatalogoSubTitle>
<Row column="column">
<Catalogoinput type="text" placeholder="Digite o Nome do Drag??o" onChange={(event1) => setCatalogoinputname(event1.target.value)} />
              <Catalogoinput type="text" placeholder="Digite o Tipo do Drag??o" onChange={(event2) => setCatalogoinputtype(event2.target.value)} />
              <Catalogoinput type="text" placeholder="Digite a Historia do Drag??o" onChange={(event3) => setCatalogoinputhistories(event3.target.value)} />
              <p/></Row><Row><Separator/><Catalogobutton  onClick={handleCreateDragon}>Criar</Catalogobutton><Separator/></Row>
              <p/></DragaoBox>
              ,
<DragaoBox><CatalogoSubTitle>Delete com o ID</CatalogoSubTitle>
<Row column="column">
  <Catalogoinput type="text" placeholder="Digite o ID do Drag??o"onChange={(eventdelid) => setCatalogoinputdeleteid(eventdelid.target.value)} />
  <p/><Catalogobutton  onClick={ deleteID}>DELETAR</Catalogobutton>
  <p/><label>Drag??o ID:{Catalogoinputdeleteid}</label>
              <p/></Row></DragaoBox>
              ,
<DragaoBox><CatalogoSubTitle>Edite com o ID</CatalogoSubTitle><Row column="column">
  <Catalogoinput type="text" placeholder="ID para edi????o" onChange={(eventputid) => setCatalogoinputputid(eventputid.target.value)} />
  <Catalogoinput type="text" placeholder="Digite o Nome do Drag??o" onChange={(eventputname) => setCatalogoinputnameput(eventputname.target.value)} />
  <Catalogoinput type="text" placeholder="Digite o Tipo do Drag??o" onChange={(eventputtype) => setCatalogoinputtypeput(eventputtype.target.value)} />
  <Catalogoinput type="text" placeholder="Digite a Historia do Drag??o" onChange={(eventputhistories) => setCatalogoinputhistoriesput(eventputhistories.target.value)} />
  <p/><Catalogobutton  onClick={ updateID}>Editar</Catalogobutton>
  <p/></Row></DragaoBox>
  ,
<DragaoBox>
  <CatalogoSubTitle>Ferramentas DEV.</CatalogoSubTitle>
<Row column="column">
  <p/><label>Robson Gil Rocha</label>
<label>gil1990gil@hotmail.com</label><p/>
<Line/></Row>
<Row><Separator/><DEVbutton  onClick={deleteALLBEST}>DELETAR All</DEVbutton><Separator/>
</Row><Line/></DragaoBox> 
]

function botaoSair(){
  setLoginefetuado(false)
  setLogindev(false)
}
  return (
    <>
      <CatalogoBox>
        <Row><Separator/>
        <Catalogobutton  onClick={criarOption}>Registrar</Catalogobutton><Separator/>
        <Catalogobutton  onClick={delOption}>Retirar</Catalogobutton><Separator/>
        <Catalogobutton  onClick={putOption}>Editar</Catalogobutton><Separator/>
        { logindev ? <Catalogobutton  onClick={devOption}>DEV</Catalogobutton> : <Separator/>}
        <Separator/><Separator/><Separator/><Separator/><Separator/>
        <Catalogobutton  onClick={()=>refresh()}>Refresh</Catalogobutton><Separator/>
        <Catalogobutton  onClick={()=>botaoSair()}>SAIR</Catalogobutton><Separator/></Row>
        <Row><Separator/>{optBarPst[optionbar]}<Separator/></Row>

        <GridBox>
          <Line/>
          {!loadlist
          ? 
          dragons && dragons.map(dragon => <Row key={dragon.id} column='column'><DragaoBox>
          <p> -Nome do Dragao:"{dragon.name}"</p>
          <p> -Tipo:"{dragon.type}"</p>
          <p> -Historia:"{dragon.histories}"</p>
          <p> -Data: DRAG??O:"{dragon.createdAt}"-ID:"{dragon.id}"</p>
          </DragaoBox><Separator /></Row> )
          :
          <Row><Separator /><DragaoBox>
            <Line/>
            <Row>
            <CatalogoTitle>GARREGANDO</CatalogoTitle>
            </Row>
            <Line/>
          </DragaoBox><Separator /></Row>
           }
            {count
            ? 
            <Catalogolabel>"Essa ?? a Lista de Dr??g??es; total de: "{count}""</Catalogolabel>
            :
            <Catalogolabel>"Procurando Drag??es OU N??o a Drag??es nesta Lista"</Catalogolabel>
            }
            <Line/>
        </GridBox>
          
      </CatalogoBox>
      <NavBotBox onClick={()=>botOn()}/>
      <NavTopBox onClick={()=>topOn()}/>
    </>
  );
}

export default List;