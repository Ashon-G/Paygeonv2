import MagicBell, { FloatingNotificationInbox } from "@magicbell/magicbell-react";

function MyComponent() {
  return (
    <MagicBell
      apiKey="b8b27eda9fc333e25eefe20f6f11cdae6ee2c46c"
      userEmail="vashon@kaped.io"
      theme={theme}
      locale="en"
    >
      {(props) => <FloatingNotificationInbox width={400} height={500} {...props} />}
    </MagicBell>
  );
}

const theme = {"header":{"fontFamily":"inherit","backgroundColor":"#FFFFFF","textColor":"#5225C1","fontSize":"15px","borderRadius":"10px"},"notification":{"default":{"fontSize":"14px","borderRadius":"16px","margin":"8px","backgroundColor":"#FFFFFF","textColor":"#3A424D","fontFamily":"inherit"},"unread":{"backgroundColor":"#F8F5FF","textColor":"#3A424D","hover":{"backgroundColor":"#F2EDFC"},"state":{"color":"#5225C1"}},"unseen":{"backgroundColor":"#F8F5FF","textColor":"#3A424D","hover":{"backgroundColor":"#F2EDFC"},"state":{"color":"#5225C1"}}},"icon":{"borderColor":"#4C4C4C","width":"24px"},"unseenBadge":{"backgroundColor":"#F80808"},"banner":{"backgroundColor":"#F8F5FF","textColor":"#3A424D","fontSize":"14px"},"dialog":{"backgroundColor":"#F5F5F5","textColor":"#313131","accentColor":"#5225C1"},"footer":{"fontFamily":"inherit","backgroundColor":"#FFFFFF","textColor":"#5225C1","fontSize":"15px","borderRadius":"10px"}};