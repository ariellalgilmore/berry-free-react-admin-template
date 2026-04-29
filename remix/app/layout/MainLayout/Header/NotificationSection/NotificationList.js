// carbon
import { Button, Tag, Tile } from '@carbon/react';
import { Store, Mailbox, Image, Send } from '@carbon/icons-react';

// assets
import User1 from 'assets/images/users/user-round.svg';

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {
    return (
        <div style={{ width: '100%', maxWidth: '330px' }}>
            <div
                style={{
                    cursor: 'pointer',
                    padding: '16px',
                    borderBottom: '1px solid #e0e0e0'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src={User1}
                        alt="John Doe"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            marginRight: '12px'
                        }}
                    />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600 }}>John Doe</div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>2 min ago</div>
                </div>
                <div style={{ paddingLeft: '52px' }}>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                        It is a long established fact that a reader will be distracted
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Tag type="red" size="sm">Unread</Tag>
                        <Tag type="yellow" size="sm">New</Tag>
                    </div>
                </div>
            </div>

            <div
                style={{
                    cursor: 'pointer',
                    padding: '16px',
                    borderBottom: '1px solid #e0e0e0'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <div
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#24a148',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '12px'
                        }}
                    >
                        <Store size={20} style={{ color: 'white' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600 }}>Store Verification Done</div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>2 min ago</div>
                </div>
                <div style={{ paddingLeft: '52px' }}>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                        We have successfully received your request.
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Tag type="red" size="sm">Unread</Tag>
                    </div>
                </div>
            </div>

            <div
                style={{
                    cursor: 'pointer',
                    padding: '16px',
                    borderBottom: '1px solid #e0e0e0'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <div
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#0f62fe',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '12px'
                        }}
                    >
                        <Mailbox size={20} style={{ color: 'white' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600 }}>Check Your Mail.</div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>2 min ago</div>
                </div>
                <div style={{ paddingLeft: '52px' }}>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                        All done! Now check your inbox as you're in for a sweet treat!
                    </div>
                    <Button
                        kind="primary"
                        size="sm"
                        renderIcon={Send}
                    >
                        Mail
                    </Button>
                </div>
            </div>

            <div
                style={{
                    cursor: 'pointer',
                    padding: '16px',
                    borderBottom: '1px solid #e0e0e0'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src={User1}
                        alt="John Doe"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            marginRight: '12px'
                        }}
                    />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600 }}>John Doe</div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>2 min ago</div>
                </div>
                <div style={{ paddingLeft: '52px' }}>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                        Uploaded two file on <strong>21 Jan 2020</strong>
                    </div>
                    <Tile style={{ backgroundColor: '#f4f4f4', padding: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Image size={20} />
                            <span style={{ fontSize: '14px', fontWeight: 600 }}>demo.jpg</span>
                        </div>
                    </Tile>
                </div>
            </div>

            <div
                style={{
                    cursor: 'pointer',
                    padding: '16px'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src={User1}
                        alt="John Doe"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            marginRight: '12px'
                        }}
                    />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600 }}>John Doe</div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>2 min ago</div>
                </div>
                <div style={{ paddingLeft: '52px' }}>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                        It is a long established fact that a reader will be distracted
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Tag type="green" size="sm">Confirmation of Account.</Tag>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationList;