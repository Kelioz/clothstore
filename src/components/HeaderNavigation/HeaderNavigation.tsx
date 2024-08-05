import {Container, Nav, Navbar} from "react-bootstrap";
import {useContext} from "react";
import {WindowContext} from "../../context.tsx";
import Button from "../../ui/Button/Button.tsx";
import styles from './HeaderNavigation.module.scss'

export default function HeaderNavigation(){
    const winCon = useContext(WindowContext)
    const windowWidth = winCon.windowWidth

    return(
        <>
        <Navbar collapseOnSelect expand={'md'} bg={'black'} variant={'dark'}  className={styles.root_navbarText}>
            <Container >
                <Navbar.Toggle aria-controls={'responsive-navbar-nav '} />
                <div  className={'d-flex align-items-center  gap-3'} id={'navWidthMiniId'}>
                    {windowWidth < 780 ?
                        <Nav.Link href={'/'} style={{color: 'white'}}>Logo</Nav.Link>:
                        <Nav.Link href={'/'} style={{color: 'white'}}>Logo</Nav.Link>
                    }

                    {windowWidth < 780 ?
                        null:
                    <Nav.Link href={'/'}  ><i className="fa fa-map-marker" aria-hidden="true"></i> Москва</Nav.Link>
                    }
                    {windowWidth > 780 ?
                        null:
                    <div className={'d-flex justify-content-end gap-4 '}>
                        <Nav.Link href={'/'}><i className="fa fa-search" aria-hidden="true"></i></Nav.Link>
                        <Nav.Link href={'/'}><i className="fa fa-user-o" aria-hidden="true"></i></Nav.Link>
                        <Nav.Link href={'/'}><i className="fa fa-heart-o" aria-hidden="true"></i></Nav.Link>
                        <Nav.Link href={'/'}><i className="fa fa-shopping-bag" aria-hidden="true"></i></Nav.Link>
                    </div >
                    }
                </div>
                <Navbar.Collapse id={'responsive-navbar-nav '} className={'justify-content-center  '} >
                    <Nav className={'gap-3 '} style={{alignItems:'center'}} >
                        {windowWidth > 700 ?
                            <Nav.Link href={'/'} ><Button type={'sale'}>Sale</Button></Nav.Link>:
                            <Nav.Link href={'/'} style={{paddingTop: '20px'}}>Sale</Nav.Link>
                        }
                        <Nav.Link href={'/'}>Женщинам</Nav.Link>
                        <Nav.Link href={'/'}>Мужчинам</Nav.Link>
                        <Nav.Link href={'/'}>Детям</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                {windowWidth > 780 ?
                    <div className={'d-flex justify-content-end gap-4 '}>
                        <Nav.Link href={'/'}><i className="fa fa-search" aria-hidden="true"></i></Nav.Link>
                        <Nav.Link href={'/'}><i className="fa fa-user-o" aria-hidden="true"></i></Nav.Link>
                        <Nav.Link href={'/'}><i className="fa fa-heart-o" aria-hidden="true"></i></Nav.Link>
                        <Nav.Link href={'/'}><i className="fa fa-shopping-bag" aria-hidden="true"></i></Nav.Link>
                    </div>:
                    null}

            </Container>
        </Navbar>
            {windowWidth > 700 ?
                <div  className={styles.root_underNavbarText}>
                    <div>Новинки</div>
                    <div>Одежда</div>
                    <div>Обувь</div>
                    <div>Аксессуары</div>
                    <div>Любимые бреды</div>
                </div> :
                <div></div>

            }
        </>
    )
}
