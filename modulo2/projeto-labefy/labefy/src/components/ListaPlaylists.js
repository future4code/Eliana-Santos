import React from "react";
import axios from "axios";
import { Tabela, Adicionar, Main, BotaoAdd, BotaoDel, Botoes } from './styled'
import Delete from '../img/lixeira.png'
import ListaDeMusica from '../img/irParaMusica.png'
import Modal from './Modal.js';
import ListaDeMusicas from './ListaMusicas.js'


export default class ListaPlaylists extends React.Component {

    constructor() {
        super();
        this.state = {
            playlists: [],
            inputValue: '',
            show: false,
            selectPlaylist: null
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        this.getPlaylists();
    }

    showModal = (id) => {
        if (id !== null) {
            this.setState({
                show: true,
                selectPlaylist: id
            });
        }
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    getPlaylists = () => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
                headers: {
                    Authorization: 'eliana-santos-carver'
                }
            }
            ).then((response) => {
                this.setState({
                    playlists: response.data.result.list
                });


            }).catch((erro) => {


            });
    };

    createPlaylist = () => {
        const body = {
            name: this.state.inputValue
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            body,
            {
                headers: {
                    Authorization: 'eliana-santos-carver'
                }
            }
        ).then((response) => {
            this.setState({ inputValue: '' })
            this.getPlaylists()
            alert("Playlist Adicionada com sucesso!")


        }).catch((erro) => {
            alert(erro.response.data.message)


        })
    }

    deletarPlaylist = (id, name) => {
        if (window.confirm(`Deseja excluir a playlist "${name}"`)) {

            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
            axios.delete(url, {
                headers: {
                    Authorization: "eliana-santos-carver"
                }
            })
                .then((res) => {
                    alert("Playlist Deletada!");
                    this.getPlaylists()

                })
                .catch((erro) => {
                    console.log(erro.response.data)
                })
        }
    }

    render() {

        const playlistsList = this.state.playlists?.map((playlist) =>
            <tr>
                <td>{playlist.name}</td>
                <Botoes>
                    <BotaoAdd onClick={() => this.showModal(playlist.id)} ><img src={ListaDeMusica} alt="Ir Para Lista de Música" /></BotaoAdd>
                    <BotaoDel onClick={() => this.deletarPlaylist(playlist.id, playlist.name)}><img src={Delete} alt="delete" /></BotaoDel>
                </Botoes>
            </tr>
        );

        return (
            <div>
                <Main>
                    <Adicionar>
                        <input
                            placeholder={'Nome da playlist'}
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={this.createPlaylist}>Criar Playlist</button>
                    </Adicionar>

                    <Tabela>
                        <tr>
                            <th>Playlists</th>
                            <th></th>
                        </tr>
                        {playlistsList}

                    </Tabela>

                    <Modal show={this.state.show} handleClose={this.hideModal} children={<ListaDeMusicas id={this.state.selectPlaylist} />}>
                    </Modal>

                </Main>
            </div>
        )
    }
}
