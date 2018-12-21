import React, { Component } from 'react';
import { avatarUrls_thumb } from 'core/imgUrl';
import { Card, Header, Form, Button, Input, Image, List } from 'semantic-ui-react';

class Prompt extends Component{
    state = { loading: false, avatarUrl: avatarUrls_thumb[0], nickname: null };
   
      setAvatarUrl = (avatarUrl) => {
    if (this.state.loading) return;
    this.setState(state => ({...state, avatarUrl}));
    this.nicknameInputRef.focus();
  }

  setNickname = (nickname) => {
    if (this.state.loading) return;
    this.setState(state => ({...state, nickname}));
  }

  submit = (e) => {
    e.preventDefault();

    const { avatarUrl, nickname, loading } = this.state;
    if (loading || !nickname.trim()) return;

    this.setState(state => ({...state, loading: true }));

    // TODO: login as and set this.props.state.user
    //this.props.login({ nickname, avatarUrl })
  }

  componentDidMount() {
    this.setState(state => ({...state, nickname: '손님'+parseInt((new Date).getTime()).toString().substr(-4)}))
    this.nicknameInputRef.focus();
  }



    render() {
        return (
            <Card fluid raised center>
            <Card.Content
                header={
                <Header content='캐치마인드에 오신 것을 환영합니다 * ^_^ *' icon='paint brush' />
                }
                description={
                <div className='flex-vert'>
                    <Form
                    loading={this.state.loading}
                    onSubmit={this.login}
                    className='flex-top'
                    >
                    <Form.Field>
                        <List horizontal relaxed>
                        {avatarUrls_thumb.map((avatarUrl, key) => (
                            // <li key={key} className={this.state.avatarUrl === avatarUrl ? 'active' : null}>
                             <List.Item>
                            <Image
                                circular
                                bordered
                                src={require('img/'+avatarUrl)}
                                onClick={() => this.setAvatarUrl(avatarUrl)}
                                width={this.state.avatarUrl == avatarUrl ? 90 : 45}
                            />
                            </List.Item>
                            // </li>
                        ))}
                        </List>
                    </Form.Field>
                    <Form.Field>
                        <Input
                        ref={ref => this.nicknameInputRef = ref}
                        type='text'
                        placeholder='이름을 입력하세요.'
                        value={this.state.nickname}
                        onChange={(e) => this.setNickname(e.target.value)}
                        />
                    </Form.Field>
                    <Button
                        fluid
                        color='blue'
                        size='large'
                        onClick={this.submit}
                    >입장하기</Button>
                    </Form>
                </div>
                }
            />
            </Card>
        )
    }
}

export default Prompt;