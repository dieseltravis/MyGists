//https://gist.github.com/479010

using System;
//Microsoft.TeamFoundation.Client.dll
using Microsoft.TeamFoundation.Client;
//Microsoft.TeamFoundation.VersionControl.Client.dll
using Microsoft.TeamFoundation.VersionControl.Client;

namespace GetPendingChanges
{
    class Program
    {
        const string TFSSERVER = "http://TfsServer:8080";
        static void Main(string[] args)
        {
            string projectName = args[0];
            TeamFoundationServer tfs = new TeamFoundationServer(TFSSERVER);
            VersionControlServer versionControl = (VersionControlServer)tfs.GetService(typeof(VersionControlServer));
            PendingSet[] sets = versionControl.GetPendingSets(new String[] { "$/Projects/" + projectName }, RecursionType.Full);

            Console.WriteLine(versionControl.AuthenticatedUser + " pending changes for " + projectName + ":");
            int total = 0;
            foreach (PendingSet set in sets)
            {
                if (set.Type == PendingSetType.Workspace && set.OwnerName == versionControl.AuthenticatedUser)
                {
                    foreach (PendingChange pc in set.PendingChanges)
                    {
                        Console.WriteLine(pc.ServerItem);
                        total++;
                    }
                }
            }
            Console.WriteLine(total.ToString() + " total changes.");
        }
    }
}

// Add the compiled EXEs to your External Tools in VS, pass in $(TargetName) and/or Prompt for arguments and send it to the Output window.
