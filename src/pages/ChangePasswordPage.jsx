import React from "react";

function ChangePasswordPage() {
  return (
    <div style={{ 
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center", 
      padding: "12px 48px 48px 48px", 
      gap: "32px",
      position: "absolute",
      width: "480px",
      left: "50%", 
      transform: "translateX(-50%)", 
      top: "50%", 
      marginTop: "-336px", 
      border: "1px solid #060606"
    }}>
      <div style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "384px"
      }}>
        <h2 style={{ 
          width: "100%",
          fontFamily: 'Roboto',
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "48px",
          lineHeight: "120%",
          textAlign: "center",
          color: "#060606",
          marginBottom: "12px"
        }}>Change Password</h2>
        
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
          width: "100%"
        }}>
          <p style={{ 
            width: "100%",
            fontFamily: 'Roboto',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "150%",
            color: "#000000",
            textAlign: "left",
            marginBottom: "0"
          }}>In recommendation to protecting your account, make sure your password contains:</p>
          <ul style={{ 
            width: "100%",
            fontFamily: 'Roboto',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "150%",
            color: "#000000",
            textAlign: "left",
            paddingLeft: "20px",
            marginTop: "0"
          }}>
            <li>Longer than 8 characters</li>
            <li>Doesn’t match the username</li>
            <li>Must contain at least 2 special characters</li>
          </ul>
        </div>
      </div>

      <div style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        width: "384px"
      }}>
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
          width: "100%"
        }}>
          <label htmlFor="newPassword" style={{ 
            width: "100%",
            fontFamily: 'Roboto',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "150%",
            color: "#060606"
          }}>Enter New Password</label>
          <input type="password" id="newPassword" style={{ 
            width: "100%",
            padding: "12px",
            gap: "8px",
            background: "#FFFFFF",
            border: "1px solid #060606",
            borderRadius: "10px"
          }} placeholder="New Password" />
        </div>
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
          width: "100%"
        }}>
          <label htmlFor="reenterPassword" style={{ 
            width: "100%",
            fontFamily: 'Roboto',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "150%",
            color: "#060606"
          }}>Re-enter New Password</label>
          <input type="password" id="reenterPassword" style={{ 
            width: "100%",
            padding: "12px",
            gap: "8px",
            background: "#FFFFFF",
            border: "1px solid #060606",
            borderRadius: "10px"
          }} placeholder="Re-enter New Password" />
        </div>
        <button type="submit" style={{ 
          width: "100%",
          padding: "12px 24px",
          background: "#060606",
          border: "1px solid #060606",
          fontFamily: 'Roboto',
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "10px",
          lineHeight: "150%",
          color: "#FFFFFF"
        }}>Change Password</button>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
