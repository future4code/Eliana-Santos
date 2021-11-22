import React from "react";
import axios from "axios";
import Delete from '../img/lixeira.png'


export default class ListaDeMusicas extends React.Component {

    state = {
        inputValue: '',
        playlists: [],
        name: "",
        artista: "",
        link: ""
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps.id)
        console.log(this.props.id)
        if (prevProps?.id !== this.props.id) {
            this.getPlaylistTracks(this.props.id);
        }
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    getPlaylistTracks = (id) => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
                , {
                    headers: {
                        Authorization: 'eliana-santos-carver'
                    }
                }
            ).then((response) => {
                console.log(response)
                this.setState({
                    playlists: response.data.result.list
                });
            }).catch((erro) => {
                console.log(erro)

            });
    };

    addTrack = (id) => {
        const body = {
            name: this.state.inputValue,
            autor: this.state.inputValue,
            link: this.state.inputValue
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
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


    deletarTrack = (id, name) => {
        if (window.confirm(`Deseja excluir a playlist "${name}"`)) {

            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/${id}`
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
        const ListMusic = this.state.playlists?.map((playlist) =>
            <tr>
                <td>{playlist.name}</td>
                <td>

                    <div onClick={() => this.deletarPlaylist(playlist.id, playlist.name)}><img src={Delete} alt="delete" /></div>
                </td>
            </tr>
        );



        return (
            <div>
                <div>
                    <input
                        placeholder={'Nome da Música'}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}


                    />
                    <input
                        placeholder={'Nome do Cantor(a) ou Banda'}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}


                    />
                    <input
                        placeholder={'Link da Música'}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}


                    />
                    <button onClick={this.addTrack}>Adicionar Música</button>
                </div>
                <table>
                    <tr>
                        <th>Playlist</th>
                        <th></th>
                    </tr>
                    {ListMusic}

                </table>


            </div>
        )
    }

}