import { Box,  Drawer } from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Inputs/Input";
import CustomizeTextArea from "../Inputs/TextArea";
import CustomizedButton from "../Buttons/CustomizedButton";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomDrawer({ isOpen, onClose }: DrawerProps) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box 
        style={{width: '400px'}}
        role="presentation"
      >

        {/* Header */}

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-between",
          padding: "24px"
        }}>
          <div style={{
            color:'#4B465C',
            fontSize: '18px',
            fontWeight: "500"
          }}>
            Submit New
          </div>
          <div style={{
              width: '38px',
              height: '38px',
              background: '#4B465C29',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
              cursor: 'pointer',
            }} 
            onClick={onClose}>
            <CloseIcon/>
          </div>
        </div>

        {/* Form */}

        <div style={{
          padding: '0 24px 16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>

          <div style={{
             fontSize: '13px',
             fontWeight: '400',
             color: '#4B465C',
          }}>
            Title
          </div>

          <Input label="Placeholder" width="352px" />

        </div>

        <div style={{
          padding: '0 24px 16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          <div style={{
             fontSize: '13px',
             fontWeight: '400',
             color: '#4B465C',
          }}>
            Description
          </div>

          <CustomizeTextArea minLines={15} placeholder="Placeholder"/>

        </div>

        <div style={{
          padding: '0 24px',
          display: 'flex',
          gap: '16px',
        }}>
          <CustomizedButton
            label="Submit"
            onClick={() => {}}
          />
          <CustomizedButton
            label="Cancel"
            onClick={onClose}
            secondary
          />
        </div>
      </Box>
    </Drawer>
  );
}

