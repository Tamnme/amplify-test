import { FabricIcon } from '@/assets/icon/fabric';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tab } from '@/config/customize-tab';
import { useTabs } from '@/stores/tab-store';

export const CustomizeFormWrapper = () => {
  const { tabCurrentValue, setTabValue } = useTabs();
  return (
    <div>
      <Tabs
        defaultValue="fabric"
        value={tabCurrentValue}
        onValueChange={(tab) => setTabValue(tab as Tab)}
      >
        <TabsList className="flex w-full justify-between">
          <TabsTrigger value="fabric" className="flex">
            <FabricIcon size={20} className="mr-1.5" />
            <span className="text-[15px] font-bold uppercase">Fabric</span>
          </TabsTrigger>
          <TabsTrigger value="size" className="flex">
            <FabricIcon size={20} className="mr-1.5" />
            <span className="text-[15px] font-bold uppercase">Size</span>
          </TabsTrigger>
          <TabsTrigger value="features" className="flex">
            <FabricIcon size={20} className="mr-1.5" />
            <span className="text-[15px] font-bold uppercase">Features</span>
          </TabsTrigger>
          <TabsTrigger value="summary" className="flex">
            <FabricIcon size={20} className="mr-1.5" />
            <span className="text-[15px] font-bold uppercase">Summary</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="fabric">Fabric</TabsContent>
        <TabsContent value="size">Size</TabsContent>
        <TabsContent value="features">Features</TabsContent>
        <TabsContent value="summary">Summary</TabsContent>
      </Tabs>
    </div>
  );
};
