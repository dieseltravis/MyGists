//https://gist.github.com/479010

using System;
using System.Linq;
//Microsoft.VisualStudio.SourceSafe.Interop.dll
using Microsoft.VisualStudio.SourceSafe.Interop;

namespace GetPendingCheckins
{
    class Program
    {
        const string SSDIR = @"\\VssServer\VssShare";
        static void Main(string[] args)
        {
            string projectName = args[0];
            string userName = "user";

            string vssPath = SSDIR;
            VSSDatabaseClass vss = new VSSDatabaseClass();
            vss.Open(vssPath + @"\srcsafe.ini", userName, userName);
            VSSItem sourceItem = vss.get_VSSItem("$/Projects/" + projectName, false);
            
            Console.WriteLine(userName + " pending checkins for " + projectName + ":");
            int total = GetItems(sourceItem);
            Console.WriteLine(total.ToString() + " total changes.");

        }

        const int VSSFILE_CHECKEDOUT_ME = 2;
        const int VSSITEM_PROJECT = 0;
        const int VSSITEM_FILE = 1;
        public static int GetItems(IVSSItem originalItem)
        {
            int total = 0;
            foreach (IVSSItem subItem in originalItem.get_Items(false))
            {
                if (subItem.Type == VSSITEM_FILE && subItem.IsCheckedOut == VSSFILE_CHECKEDOUT_ME)
                {
                    Console.WriteLine(subItem.Spec);
                    total++;
                }
                else if (subItem.Type == VSSITEM_PROJECT)
                {
                    total += GetItems(subItem);
                }
            }
            return total;
        }
    }
}

// Add the compiled EXEs to your External Tools in VS, pass in $(TargetName) and/or Prompt for arguments and send it to the Output window.
