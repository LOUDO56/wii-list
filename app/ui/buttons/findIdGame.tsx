import React from 'react'

export const FindIdGame = ({search} : {search: string}) => {


    function openGameTDBPage(){
        window.open(
            `https://www.gametdb.com/Wii/Search?action=search&q=group%3DWii&submit=Search&id=&region=&type=%3DWii&title_EN=${search}&title_FR=&title_DE=&title_ES=&title_IT=&title_NL=&title_PT=&title_SE=&title_DK=&title_NO=&title_FI=&title_GR=&title_TR=&title_JA=&title_KO=&title_ZHTW=&title_ZHCN=&title_RU=&developer=&publisher=&year=&month=&day=&genre=&rating=&descriptor=&players=&acc_other=&online_players=&online_online=&online_download=&online_score=&online_messageboard=&online_nintendods=&online_wiimmfi=&size_1=&crc=&md5=&sha1=&case_color=`,
            '_blank'
        )
    }

  return (
    <button className='px-2 py-1 text-white bg-blue-400 self-start rounded-lg' onClick={openGameTDBPage}>
        Trouver les ID du jeu
    </button>
  )
}
