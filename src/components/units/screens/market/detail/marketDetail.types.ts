export interface IMarketDetailUIProps {
    
    data: any;
    setModalVisible:any;
    modalVisible:boolean
    onPressDelete: () => void
    onPressCloseModal: () => void
    onPressToggle: () => void
    onPressOpenModal: () => void
    onPressChat: () => void
}