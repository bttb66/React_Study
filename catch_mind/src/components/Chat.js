import React, { Component } from 'react';
import { avatarUrls_thumb } from 'core/imgUrl';
import { Card, Header, Form, Button, Input, Image, Dimmer, Loader, Feed } from 'semantic-ui-react';

class Chat extends Component{
    state = { message: null, loading: true, sending: false };

    componentDidMount(){
        this.setState(state => ({...state, loading: false}))
    }

    submit(){

    }

    render(){
        return (
            <Card>
                <Card.Content
                    header={
                        <Header
                            icon='paint brush'
                            style={{position: 'relative'}}
                            content={
                            (
                                <div>
                                <Button style={{position: 'absolute', right: '0'}} compact size='mini' onClick={this.props.leave}>나가기</Button>
                                <span>채팅</span>
                                </div>
                            )
                            }
                        />
                    }
                    description={
                        <Dimmer.Dimmable className='flex-vert'>
                            <Dimmer active={this.state.loading} inverted>
                                <Loader size='large'/>
                            </Dimmer>
                            <div className='flex-top flex-hori'>
                                <div className='flex-left' ref={ref => this.messagesContainerRef = ref}>
                                    <Feed size='small'>
                                        <Feed.Event>
                                            <Feed.Label image={require('img/charmander_128.png')} />
                                            <Feed.Content>
                                            <Feed.Summary>
                                                루루
                                                <Feed.Date>{new Date().toLocaleString()}</Feed.Date>
                                            </Feed.Summary>
                                            <Feed.Extra text>안녕하세요</Feed.Extra>
                                            </Feed.Content>
                                        </Feed.Event>

                                        <Feed.Event>
                                            <Feed.Label image={require('img/eevee_128.png')} />
                                            <Feed.Content>
                                            <Feed.Summary>
                                                리리
                                                <Feed.Date>{new Date().toLocaleString()}</Feed.Date>
                                            </Feed.Summary>
                                            <Feed.Extra text>캐치마인듀</Feed.Extra>
                                            </Feed.Content>
                                        </Feed.Event>
                                    </Feed>
                                </div>
                            </div>
                            <form onSubmit={this.submit} className='flex-bottom'>
                                <Input
                                    fluid
                                    action={{content: '보내기', color: 'blue', icon: 'send'}}
                                    size='large'
                                    ref={ref => this.inputMessageInputRef = ref}
                                    type='text'
                                    placeholder='메세지를 입력하세요.'
                                    value={this.state.message}
                                    onChange={e => this.setMessage(e.target.value)}
                                    disabled={this.state.loading}
                                />
                            </form>
                        </Dimmer.Dimmable>
                    }
                    
                />

            </Card>
        )
    }
}

export default Chat;