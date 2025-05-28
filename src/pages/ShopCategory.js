import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Heart, Truck, Shirt, UserCog, LogOut } from 'lucide-react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'sonner';
import './CSS/Profail.css';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    height: '',
    weight: '',
    size: '',
    pantsSize: '',
  });
  const [initialData, setInitialData] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logout } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://monsef74.pythonanywhere.com/api/userinfo/');
        const data = await response.json();
        setProfileData(data);
        setInitialData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const hasChanges = () => {
    return JSON.stringify(profileData) !== JSON.stringify(initialData);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!hasChanges()) {
      toast({ title: "No changes made", description: "You haven't updated any data." });
      return;
    }

    try {
      const response = await fetch('https://monsef74.pythonanywhere.com/api/userinfo/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) throw new Error("Failed to update profile");

      // eslint-disable-next-line no-unused-vars
      const result = await response.json();
      setInitialData(profileData); // update initialData after save
      setIsEditing(false);

      toast({ title: "Success", description: "Profile updated successfully!" });
    } catch (error) {
      console.error("Error saving user data:", error);
      toast({ title: "Error", description: "Failed to save changes." });
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return <p className="loading-text">Loading profile...</p>;
  }

  return (
    <div className="user-profile-container">
      <h1 className="profile-title">👤 Profile</h1>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="profile-tabs-list">
          <TabsTrigger value="personal" className="profile-tab"><UserCog size={18} /> Personal Information</TabsTrigger>
          <TabsTrigger value="orders" className="profile-tab"><Truck size={18} /> Orders</TabsTrigger>
          <TabsTrigger value="wishlist" className="profile-tab"><Heart size={18} /> Favorites</TabsTrigger>
          <TabsTrigger value="wardrobe" className="profile-tab"><Shirt size={18} /> My Wardrobe</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card className="profile-card">
            <CardContent className="profile-grid">
              {Object.keys(profileData).map((key) => (
                <Input
                  key={key}
                  name={key}
                  placeholder={key}
                  value={profileData[key]}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              ))}
            </CardContent>
          </Card>

          <div className="flex gap-4 mt-4">
            {!isEditing ? (
              <Button className="edit-button" onClick={handleEdit}>✏️ Edit</Button>
            ) : (
              <Button className="save-button" onClick={handleSave}>💾 Save Changes</Button>
            )}

            <Button className="logout-button" variant="destructive" onClick={handleLogout}>
              <LogOut size={18} className="mr-2" /> Logout
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <Card><CardContent><p className="empty-text">No requests yet.</p></CardContent></Card>
        </TabsContent>
        <TabsContent value="wishlist">
          <Card><CardContent><p className="empty-text">The favorites list is empty.</p></CardContent></Card>
        </TabsContent>
        <TabsContent value="wardrobe">
          <Card><CardContent><p className="empty-text">You have not purchased any product yet.</p></CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
