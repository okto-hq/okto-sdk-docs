export const ColumnLayout = ({ children }) => (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
        <div style={{ flex: 1, minWidth: 0, padding: '1em' }}>
            {children[0]}
        </div>
        <div style={{ flex: 1, minWidth: 0, padding: '1em', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#555555 #00000030' }}>
            {children[1]}
        </div>
    </div>
);