using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Caching.Distributed;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TBSF.Core.Services.Cache.RedisServices
{
    public class RedisServiceManager
    {
        private readonly IDistributedCache _distributedCache;
        private readonly IHostingEnvironment _hostingEnvironment;

        public RedisServiceManager(IDistributedCache distributedCache,
                                   IHostingEnvironment hostingEnvironment)
        {
            _distributedCache = distributedCache;
            _hostingEnvironment = hostingEnvironment;
        }

        public async Task AddToCache(string key, string jsonData)
        {
            try
            {
                await _distributedCache.SetStringAsync(key, jsonData);
            }
            catch (System.InvalidOperationException ex)
            {
                if(_hostingEnvironment.IsDevelopment())
                {
                    Console.WriteLine(ex.GetType().FullName);
                    Console.WriteLine(ex.Message);
                }
            }
            finally{

            }
            /*var GetMessagesCacheExpiryMinutes = 5;
            var GetProfileCacheExpiryHours = 1;
            _distributedCache.is
            if (connectionMultiplexer.IsConnected)
            {
                var cache = connectionMultiplexer.GetDatabase();

                TimeSpan expiresIn;
                // Search Cache
                if (key.Contains("-"))
                {
                    expiresIn = new TimeSpan(0, GetMessagesCacheExpiryMinutes, 0);
                }
                // User info cache
                else
                {
                    expiresIn = new TimeSpan(GetProfileCacheExpiryHours, 0, 0);
                }
                await cache.StringSetAsync(key, serializedData, expiresIn).ConfigureAwait(false);

            }*/
        }
    }
}
