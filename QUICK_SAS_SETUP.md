# Quick Guide: Generate Azure Blob Storage SAS Token

## 🚀 5-Minute Setup

### 1️⃣ Open Azure Portal
Visit: https://portal.azure.com

### 2️⃣ Navigate to Storage Account
- Search for "zrealtystoragedev" in the top search bar
- Click on your storage account

### 3️⃣ Generate SAS Token
1. In the left sidebar, find **"Shared access signature"**
2. Configure these settings:

   **Allowed services:**
   - ✅ Blob
   - ❌ File
   - ❌ Queue
   - ❌ Table

   **Allowed resource types:**
   - ✅ Service
   - ✅ Container
   - ✅ Object

   **Allowed permissions:**
   - ✅ Read
   - ✅ List
   - ❌ Write (unless you need upload functionality)
   - ❌ Delete
   - ❌ Create

   **Start and expiry date/time:**
   - Start: Today's date, current time (or earlier)
   - End: 1 year from now (or your preference)

   **Allowed protocols:**
   - ✅ HTTPS only

3. Click **"Generate SAS and connection string"**

### 4️⃣ Copy the SAS Token
- Look for the field labeled **"SAS token"**
- Copy everything **EXCEPT** the leading `?`
- Example: If you see `?sv=2022-11-02&ss=b...`, copy only `sv=2022-11-02&ss=b...`

### 5️⃣ Create `.env.local` File
In your project root (`d:\zlendorealtywebsite\`), create a file named `.env.local`:

```env
NEXT_PUBLIC_BLOB_URL=https://zrealtystoragedev.blob.core.windows.net/
NEXT_PUBLIC_BLOB_SAS_TOKEN=PASTE_YOUR_TOKEN_HERE
```

**Example:**
```env
NEXT_PUBLIC_BLOB_URL=https://zrealtystoragedev.blob.core.windows.net/
NEXT_PUBLIC_BLOB_SAS_TOKEN=sv=2022-11-02&ss=b&srt=sco&sp=rl&se=2027-12-31T23:59:59Z&st=2024-01-01T00:00:00Z&spr=https&sig=abc123xyz
```

### 6️⃣ Restart Dev Server
```bash
# If dev server is running, stop it (Ctrl+C)
# Then restart:
npm run dev
```

### 7️⃣ Verify It Works
- Open your app in the browser
- Check if images now load correctly
- Open DevTools → Network tab → Look for blob requests with `?sv=...&sig=...`

---

## ✅ Checklist
- [ ] SAS token generated in Azure Portal
- [ ] `.env.local` file created with correct token
- [ ] No leading `?` in the token value
- [ ] Dev server restarted
- [ ] Images loading successfully

---

## 🔴 Common Mistakes
❌ Including the `?` at the start of the token  
❌ Forgetting to restart the dev server  
❌ Setting expiry date in the past  
❌ Not enabling Read + List permissions  

---

## 📞 Need Help?
If images still don't load:
1. Check browser console for error messages
2. Verify the SAS token in `.env.local` has no extra spaces or line breaks
3. Confirm the token hasn't expired
4. Ensure the blobs actually exist in your Azure Storage

For detailed information, see: `BLOB_STORAGE_FIX.md`
