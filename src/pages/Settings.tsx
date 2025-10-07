import { useState } from "react";
import { useTheme } from "next-themes";
import { Header } from "@/components/surveillance/Header";
import { MobileNav } from "@/components/MobileNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Eye, 
  Moon, 
  Globe,
  Database,
  Save
} from "lucide-react";

const Settings = () => {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    alertThreshold: "medium",
    autoAnalysis: true,
    dataRetention: "30",
    twoFactor: false,
    language: "en",
  });

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />

      <div className="container mx-auto p-4 max-w-4xl space-y-6">
        {/* Header */}
        <div className="neu-card p-6 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="p-3 neu-card">
              <SettingsIcon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Settings</h1>
              <p className="text-sm text-muted-foreground">Manage your preferences and security</p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <Card className="neu-card p-6 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <Separator className="mb-4" />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-xs text-muted-foreground">Receive alerts via email</p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, emailNotifications: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <p className="text-xs text-muted-foreground">Browser push notifications</p>
              </div>
              <Switch
                checked={settings.pushNotifications}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, pushNotifications: checked })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Alert Threshold</Label>
              <select
                className="neu-input w-full p-2 text-sm"
                value={settings.alertThreshold}
                onChange={(e) =>
                  setSettings({ ...settings, alertThreshold: e.target.value })
                }
              >
                <option value="low">Low - All alerts</option>
                <option value="medium">Medium - Important alerts</option>
                <option value="high">High - Critical only</option>
              </select>
            </div>
          </div>
        </Card>

        {/* AI & Analysis */}
        <Card className="neu-card p-6 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold">AI & Analysis</h2>
          </div>
          <Separator className="mb-4" />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-Analysis</Label>
                <p className="text-xs text-muted-foreground">Automatically analyze uploaded videos</p>
              </div>
              <Switch
                checked={settings.autoAnalysis}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, autoAnalysis: checked })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Data Retention (days)</Label>
              <Input
                type="number"
                className="neu-input"
                value={settings.dataRetention}
                onChange={(e) =>
                  setSettings({ ...settings, dataRetention: e.target.value })
                }
              />
              <p className="text-xs text-muted-foreground">
                Video data will be automatically deleted after this period
              </p>
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card className="neu-card p-6 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-success" />
            <h2 className="text-lg font-semibold">Security</h2>
          </div>
          <Separator className="mb-4" />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Switch
                checked={settings.twoFactor}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, twoFactor: checked })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Change Password</Label>
              <Button variant="outline" className="neu-button w-full">
                Update Password
              </Button>
            </div>
          </div>
        </Card>

        {/* Appearance */}
        <Card className="neu-card p-6 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <Moon className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Appearance</h2>
          </div>
          <Separator className="mb-4" />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Dark Mode</Label>
                <p className="text-xs text-muted-foreground">Use dark theme</p>
              </div>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Language</Label>
              <select
                className="neu-input w-full p-2 text-sm"
                value={settings.language}
                onChange={(e) =>
                  setSettings({ ...settings, language: e.target.value })
                }
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex gap-3">
          <Button onClick={handleSave} className="neu-button flex-1 gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default Settings;
