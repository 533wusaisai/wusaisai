import{_ as s,c as i,o as a,X as e}from"./chunks/framework.4ft2TBN7.js";const c=JSON.parse('{"title":"加载nvm环境变量","description":"","frontmatter":{},"headers":[],"relativePath":"bug/README.md","filePath":"bug/README.md","lastUpdated":1710243407000}'),n={name:"bug/README.md"},t=e(`<ul><li>docker logs jenkins</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Running </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">share</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jenkins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jenkins.war</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">webroot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/jenkins_home/war</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Exception </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> thread </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.io.UncheckedIOException: Jenkins failed to create a temporary file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: java.io.IOException: Read</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">only file system</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">at executable.Main.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">extractFromJar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Main.java:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">477</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">at executable.Main.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Main.java:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">265</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Caused </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">by</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: java.io.IOException: Read</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">only file system</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">at java.base</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">java.io.UnixFileSystem.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createFileExclusively</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Native Method)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">at java.base</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">java.io.File.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createTempFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(File.java:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2170</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">at executable.Main.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">extractFromJar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Main.java:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">474</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> more</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>错误日志表明 Jenkins 无法在 /tmp 目录中创建临时文件，因为容器的文件系统是只读的。Jenkins 和许多其他应用程序需要能够写入 /tmp 目录。</p></blockquote><blockquote><p>为了解决这个问题，你需要在启动 Docker 容器时添加一个额外的挂载点，以便 Jenkins 可以将 /tmp 目录用作临时文件存储。你可以通过添加一个临时卷来实现这一点。</p></blockquote><blockquote><p>修改你的 docker run 命令，包括一个挂载点为 /tmp 的卷： docker run -d --name jenkins --read-only --mount type=volume,source=jenkins-volume,target=/var/jenkins_home --mount type=volume,target=/tmp -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts</p></blockquote><p>安装最新node</p><p>Error: Package: 2:nodejs-20.11.0-1nodesource.x86_64 (nodesource-nodejs) Requires: glibc &gt;= 2.28 Installed: glibc-2.17-326.el7_9.x86_64 (@updates) glibc = 2.17-326.el7_9 Available: glibc-2.17-317.el7.i686 (base) glibc = 2.17-317.el7 Available: glibc-2.17-322.el7_9.i686 (updates) glibc = 2.17-322.el7_9 Available: glibc-2.17-323.el7_9.i686 (updates) glibc = 2.17-323.el7_9 Available: glibc-2.17-324.el7_9.i686 (updates) glibc = 2.17-324.el7_9 Available: glibc-2.17-325.el7_9.i686 (updates) glibc = 2.17-325.el7_9 Error: Package: 2:nodejs-20.11.0-1nodesource.x86_64 (nodesource-nodejs) Requires: libm.so.6(GLIBC_2.27)(64bit) Error: Package: 2:nodejs-20.11.0-1nodesource.x86_64 (nodesource-nodejs) Requires: libstdc++.so.6(GLIBCXX_3.4.20)(64bit) Error: Package: 2:nodejs-20.11.0-1nodesource.x86_64 (nodesource-nodejs) Requires: libc.so.6(GLIBC_2.28)(64bit) Error: Package: 2:nodejs-20.11.0-1nodesource.x86_64 (nodesource-nodejs) Requires: libstdc++.so.6(GLIBCXX_3.4.21)(64bit) Error: Package: 2:nodejs-20.11.0-1nodesource.x86_64 (nodesource-nodejs) Requires: libstdc++.so.6(CXXABI_1.3.9)(64bit) You could try using --skip-broken to work around the problem You could try running: rpm -Va --nofiles --nodigest [root@huabo ~]#</p><p>这个错误信息表明你尝试在CentOS 7上安装的Node.js版本（在这个例子中是20.11.0）需要比系统当前安装的glibc版本（2.17）更新的版本（至少2.28）。由于glibc是Linux系统的核心库，升级它可能会导致系统不稳定，通常不建议手动升级glibc。</p><p>为了解决这个问题，你有几个选项：</p><p>安装较低版本的Node.js： 你可以尝试安装一个与CentOS 7兼容的Node.js版本。例如，Node.js 10.x、12.x或14.x可能与CentOS 7的glibc版本兼容。你可以通过运行以下命令来安装一个较低版本的Node.js：</p><p>Copy curl -sL [<a href="https://rpm.nodesource.com/setup_14.x" target="_blank" rel="noreferrer">https://rpm.nodesource.com/setup_14.x</a>] | sudo bash - sudo yum install -y nodejs</p><p>使用nvm安装Node.js： 另一个选择是使用Node Version Manager（nvm）来安装Node.js。nvm允许你在同一台机器上安装和管理多个Node.js版本，而不需要root权限。你可以按照以下步骤安装nvm和Node.js：</p><p>Copy curl -o- [<a href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh" target="_blank" rel="noreferrer">https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh</a>] | bash</p><h1 id="加载nvm环境变量" tabindex="-1">加载nvm环境变量 <a class="header-anchor" href="#加载nvm环境变量" aria-label="Permalink to &quot;加载nvm环境变量&quot;">​</a></h1><p>export NVM_DIR=&quot;$HOME/.nvm&quot; [ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; . &quot;$NVM_DIR/nvm.sh&quot; [ -s &quot;$NVM_DIR/bash_completion&quot; ] &amp;&amp; . &quot;$NVM_DIR/bash_completion&quot;</p><h1 id="安装node-js" tabindex="-1">安装Node.js <a class="header-anchor" href="#安装node-js" aria-label="Permalink to &quot;安装Node.js&quot;">​</a></h1><p>nvm install 14 nvm use 14</p><p>升级操作系统： 如果你需要使用最新版本的Node.js，并且你的应用程序或开发环境需要这些新特性，你可能需要考虑升级到最新版本的CentOS（例如CentOS 8或CentOS Stream），这些版本提供了更新的glibc。</p><p>使用容器化技术： 如果升级操作系统不是一个选项，你可以考虑使用Docker等容器化技术。通过Docker，你可以在容器中运行一个包含了所有依赖项的Node.js应用，而不需要修改你的主机系统。</p><p>选择哪种方法取决于你的具体需求和环境。如果你只是需要运行Node.js应用而不需要最新的特性，安装一个较低版本的Node.js可能是最简单的解决方案。如果你需要最新版本的Node.js，那么升级操作系统或使用Docker可能是更好的选择。</p><p>错误信息 MongoServerError: Command createUser requires authentication 表示尝试在MongoDB中创建新用户时失败了，因为执行这个操作的客户端没有进行认证。在MongoDB中，创建用户、修改用户权限或执行其他管理任务通常需要管理员权限。</p><p>要解决这个问题，你需要以已经存在的管理员用户身份登录到MongoDB实例，然后才能创建新用户或执行其他管理操作。以下是解决这个问题的步骤：</p><ol><li>连接到MongoDB Shell</li></ol><p>首先，你需要连接到MongoDB shell。如果你已经在shell中，确保你已经连接到了正确的数据库实例。</p><ol start="2"><li>认证为管理员用户</li></ol><p>在MongoDB shell中，你需要使用一个已经存在的管理员用户来认证。通常，这个用户会在admin数据库中创建。使用如下命令进行认证：</p><p>Copy use admin db.auth(&#39;existingAdminUser&#39;, &#39;existingAdminPassword&#39;)</p><p>将existingAdminUser和existingAdminPassword替换为你的管理员用户名和密码。</p><ol start="3"><li>创建新用户</li></ol><p>一旦认证成功，你就可以创建新用户了。如果你想要给新用户readWrite权限在特定的数据库（例如huabo），你可以使用以下命令：</p><p>Copy use huabo db.createUser({ user: &#39;admin&#39;, pwd: &#39;20230911&#39;, roles: [{ role: &#39;readWrite&#39;, db: &#39;huabo&#39; }] });</p><p>这将在huabo数据库中创建一个新用户，用户名为admin，密码为20230911，并且拥有读写权限。</p><ol start="4"><li>确认用户创建成功</li></ol><p>创建用户后，你可以使用show users命令来确认新用户是否已经成功创建在当前数据库中。</p><p>Copy show users</p><p>如果你在创建用户时遇到任何问题，MongoDB shell会提供错误信息来帮助你诊断问题。</p><p>注意事项 确保你有足够的权限来创建新用户。 使用强密码来保证安全性。 如果你的MongoDB实例是新的，并且还没有任何用户，你可能需要在启动MongoDB时禁用访问控制，以便首次创建管理员用户。这可以通过在启动MongoDB时不带--auth参数来实现。创建了管理员用户后，重新启用访问控制。 如果你正在使用MongoDB Atlas或其他托管服务，用户管理可能会通过Web界面进行。</p><p>这条错误信息表明你的 MongoDB 用户没有足够的权限在 huabo 数据库上执行 find 操作。错误信息 &quot;not authorized on huabo to execute command&quot; 明确指出了权限问题。</p><p>这可能是因为以下几个原因：</p><p>用户角色不足：你的 MongoDB 用户可能没有被授予在 huabo 数据库上执行读操作的角色。例如，如果你想要让用户能够读取所有数据库，你需要给用户 readAnyDatabase 角色（在 admin 数据库中），或者如果只是针对 huabo 数据库，用户需要 read 或 readWrite 角色。</p><p>错误的认证数据库：在连接到 MongoDB 时，你可能指定了错误的认证数据库。在你的连接字符串中，你使用了 authSource=admin，这意味着你的用户应该在 admin 数据库中认证。如果用户在不同的数据库中创建，你需要在连接字符串中指定正确的 authSource。</p><p>用户未正确创建：可能用户没有正确创建，或者在创建用户时没有指定正确的权限。</p><p>要解决这个问题，你需要确保：</p><p>你的用户在 admin 数据库中有足够的权限。 你在连接字符串中指定了正确的 authSource。 你的用户有权访问 huabo 数据库并执行 find 操作。</p><p>如果你是数据库管理员，你可以通过以下命令为用户添加所需的权限（在 mongo shell 中执行）：</p><p>Copy use admin db.grantRolesToUser(&#39;yourUsername&#39;, [{ role: &#39;read&#39;, db: &#39;huabo&#39; }])</p><p>或者，如果你想要给用户所有数据库的读权限：</p><p>Copy use admin db.grantRolesToUser(&#39;yourUsername&#39;, [{ role: &#39;readAnyDatabase&#39;, db: &#39;admin&#39; }])</p><p>请确保将 &#39;yourUsername&#39; 替换为实际的用户名。</p><p>在修改用户权限后，你可能需要重新连接到数据库以使更改生效。</p><p>如果你不是数据库管理员，你需要联系管理 MongoDB 实例的人员，以便为你的用户账户授予适当的权限。</p>`,51),l=[t];function p(o,r,h,k,d,E){return a(),i("div",null,l)}const g=s(n,[["render",p]]);export{c as __pageData,g as default};